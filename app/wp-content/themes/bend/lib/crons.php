<?php
/*
// truncate chats from admin
add_action('sac_cron_truncate', 'do_this_hourly');

function do_this_hourly() {

  // FACEBOOK

  MEXIO page_id = 160162424491809
  CHILE page_id = 307759625937383
  ARGEN page_id = 221756711170308
  PERU  page_id = 480567971954111


  $page_ids = array('160162424491809','307759625937383','221756711170308','480567971954111');
  foreach( $page_ids as $page_id ){

    $pageFBID = $page_id;
    $app_id = '402470366763494';
    $app_secret = 'f432acc8c21c81c7ddb100290b6dd1dd';
    $token = $app_id.'|'.$app_secret;
    //$response = file_get_contents('https://graph.facebook.com/264435466970754/posts?access_token=402470366763494|f432acc8c21c81c7ddb100290b6dd1dd');
    $response = file_get_contents("https://graph.facebook.com/v2.6/$pageFBID/feed?fields=full_picture,message,story,created_time,link&access_token=".$token);
    $decoded = json_decode($response, true);
    $socialposts = $decoded['data'];

    foreach ( $socialposts as $socialpost ){
    	if( !empty($socialpost['message']) ){
    		$fb_post_title = substr($socialpost['message'], 0, 50);
    	}else{
    		$fb_post_title = $socialpost['id'];
    	}
    	checkDuplicateandCreate($fb_post_title, $socialpost, 'facebook');
    }
    //pr2($socialposts);

  }

  // TWITTER

  require_once(__DIR__.'/../lib/social/TwitterAPIExchange.php');
  $settings = array(
      'oauth_access_token' => "202082295-3QeETEh2K36FGN7MIp57F3K1rBgxdA4DhK0Qo06d",
      'oauth_access_token_secret' => "WsfPIsIZHV5b4EfwQ4A6ojqQIIzy7cE2zQ7kM0Yum7Hog",
      'consumer_key' => "vQA907S8xHdlLWN5mBnzizR6z",
      'consumer_secret' => "B8N6ckgIhasrp5usMgycNFpIISYOlbaUzEuM9VW11R99YpTqAi"
  );

  $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
  $getfield = '?screen_name=AgathaRdlPPeru';
  $requestMethod = 'GET';

  $twitter = new TwitterAPIExchange($settings);
  $response = $twitter->setGetfield($getfield)
      ->buildOauth($url, $requestMethod)
      ->performRequest();

  $socialposts = json_decode($response);
  foreach ( $socialposts as $socialpost ){
  	$tw_post_title = substr($socialpost->text, 0, 50);
  	checkDuplicateandCreate($tw_post_title, $socialpost, 'twitter');
  }

  //pr2(json_decode($response));

  // YOU TUBE
  $response = file_get_contents("https://www.youtube.com/feeds/videos.xml?channel_id=UCLXSQbaYszJihayqLbOUN0A");

  $youtubes = new SimpleXMLElement($response);
  $ns=$youtubes->getNameSpaces(true);
  foreach( $youtubes->entry as $video ){
  	$yt_post_title = strval($video->title);
  	$group=$video->children($ns["media"]);
  	$group=$group->group;
  	$thumbnail=$group->thumbnail[0]->attributes()['url'];
  	$video_data = array(
  		'created_at' => (string)$video->updated,
  		'id'			   => (string)$video->id,
  		'title'      => (string)$video->title,
  		'content'    => (string)$video->link['href'],
  		'image'		   => (string)$thumbnail
  	);
  	checkDuplicateandCreate($yt_post_title, $video_data, 'youtube');
  };

  //pr2($youtubes);

  // FUNCTIONS AND HELPERS



}

// cron for clearing chats
add_action( 'init', 'sac_cron_activation' );
function sac_cron_activation() {
	if (!wp_next_scheduled('sac_cron_truncate')) {
		wp_schedule_event(time(), 'weekly', 'sac_cron_truncate'); // hourly, daily, twicedaily
	}
	// wp_clear_scheduled_hook('sac_cron_truncate');
}
*/
/*
function _import_photo( $postid, $photo_name) {
	$post = get_post( $postid );
	if( empty( $post ) )
		return false;

	if( !class_exists( 'WP_Http' ) )
		include_once( ABSPATH . WPINC. '/class-http.php' );

	$photo = new WP_Http();
	$photo = $photo->request( $photo_name );
	if( $photo['response']['code'] != 200 )
		return false;

	$attachment = wp_upload_bits( 'social_media.jpg', null, $photo['body'], date("Y-m", strtotime( $photo['headers']['last-modified'] ) ) );
	if( !empty( $attachment['error'] ) )
		return false;

	$filetype = wp_check_filetype( basename( $attachment['file'] ), null );

	$postinfo = array(
		'post_mime_type'	=> $filetype['type'],
		'post_title'		=> $post->post_title . ' ',
		'post_content'		=> '',
		'post_status'		=> 'inherit',
	);
	$filename = $attachment['file'];
	$attach_id = wp_insert_attachment( $postinfo, $filename, $postid );

	if( !function_exists( 'wp_generate_attachment_data' ) )
		require_once(ABSPATH . "wp-admin" . '/includes/image.php');
	$attach_data = wp_generate_attachment_metadata( $attach_id, $filename );
	wp_update_attachment_metadata( $attach_id,  $attach_data );
	set_post_thumbnail( $postid, $attach_id );
	return $attach_id;
}

function checkDuplicateandCreate($postTitle, $item, $case){

	global $user_ID, $wpdb;
	$query = $wpdb->prepare(
			'SELECT ID FROM ' . $wpdb->posts . '
			WHERE post_title = %s
			AND post_type = \'socialposts\'',
			$postTitle
	);
	$wpdb->query( $query );

	if ( $wpdb->num_rows ) {
			return FALSE;
	} else {
		// Create post object
		if( $case == 'facebook' ){
			$term_id = 11;
			if( !empty($item['message']) ){
				$post_title = substr($item['message'], 0, 50);
				$post_content = $item['message'];
			}else{
				$post_title = $item['id'];
				$post_content = "";
			}
			$post_image = empty($item['full_picture']) ? '' : $item['full_picture'];
			$post_permalink = $item['link'];
		}else if( $case == 'twitter' ){
			$term_id = 12;
			$post_title = substr($item->text, 0, 50);
			$post_content = $item->text;
			$post_image = empty($item->entities->media[0]->media_url) ? '' : $item->entities->media[0]->media_url;
			$post_permalink = "https://twitter.com/AgathaRdlPPeru/status/".$item->id;
		}else if( $case == 'youtube' ){
			$term_id = 13;
			$post_title = $item['title'];
			$post_content = $item['content'];
			$post_image = $item['image'];
			$post_permalink = $item['content'];
		}
		$my_post = array(
			'post_type'     => 'socialposts',
			'post_title'    => $post_title,
			'post_content'    => $post_content,
			'post_status'       =>  'publish'
		);

		// Insert the post into the database
		$post_id = wp_insert_post( $my_post );
		if( $case == 'facebook' ){
			update_post_meta($post_id, 'net_id', $item['id']);
			update_post_meta($post_id, 'date', reformatDate($item['created_time']));
		}else if( $case == 'twitter' ){
			update_post_meta($post_id, 'net_id', $item->id);
			update_post_meta($post_id, 'date', reformatDate($item->created_at));
		}else if( $case == 'youtube' ){
			update_post_meta($post_id, 'net_id', $item['id']);
			update_post_meta($post_id, 'date', reformatDate($item['created_at']));
		}
		update_post_meta($post_id, 'permalink', $post_permalink);
		$term_taxonomy_ids = wp_set_object_terms( $post_id, $term_id, 'socialnetworks' );
		if( $post_image != "" ){
			_import_photo($post_id,$post_image);
		}
	}
}

function reformatDate($date){
	$d = new DateTime($date);
	return $d->format('Y-m-d H:i:s');
}


// do_this_hourly();

wp_clear_scheduled_hook( 'cliv_recurring_cron_job' );
wp_clear_scheduled_hook( 'sac_cron_truncate' );
// $cron_jobs = _get_cron_array();
// pr2($cron_jobs);
*/

?>
