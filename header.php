<?php 

?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>

		<meta charset="utf-8">
		<title><?php ifecho($post->title); ?></title>
		<!-- dns prefetch -->
		<link href="//www.google-analytics.com" rel="dns-prefetch">

		<!-- meta -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<meta name="description" content="<?php ifecho($post->fields['seo_description']); ?>">
		<meta name="keywords" content="<?php ifecho($post->fields['seo_keywords']); ?>">
		
		<!-- icons -->
		<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo $post->template_directory_uri;?>/static/img/favicon/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?php echo $post->template_directory_uri;?>/static/img/favicon/favicon-16x16.png">
		<link rel="manifest" href="/manifest.json">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
		<meta name="theme-color" content="#ffffff">

		<meta property="og:url"           content="<?php echo $post->permalink;?>" />
		<meta property="og:type"          content="website" />
		<meta property="og:title"         content="<?php ifecho($post->fields['og_title']); ?>" />
		<meta property="og:description"   content="<?php ifecho($post->fields['og_description']); ?>" />
		<meta property="og:image"         content="<?php ifecho($post->fields['og_image']); ?>" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="<?php ifecho($post->fields['og_title']); ?>" />
		<meta name="twitter:description" content="<?php ifecho($post->fields['og_description']); ?>" />
		<meta name="twitter:image" content="<?php ifecho($post->fields['og_image']); ?>" />

	</head>


	<body class="<?php echo $post->template;?> <?php echo $post->post_type;?> page-<?php echo $post->post_name;?>" data-main="">
		<div class="wrapper--global">

			<?php dynamic_sidebar( 'header-1' ); ?>
			<?php dynamic_sidebar( 'header-2' ); ?>
			<?php dynamic_sidebar( 'header-3' ); ?>
			<?php dynamic_sidebar( 'drawer-1' ); ?>
			<?php dynamic_sidebar( 'drawer-2' ); ?>
