<?php
$image = get_field('image');
// echo "<pre>";
// print_r( $image );
// echo "</pre>";
echo '<img src="'.$image['url'].'" />';