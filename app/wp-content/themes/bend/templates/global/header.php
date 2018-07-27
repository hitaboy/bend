<?php

	global $main;
	$main->methods->initialize();
	// pr2($main);

?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>

		<meta charset="<?php echo PAGE_ENCODING; ?>">

		<title><?php ifecho($main->post->fields['seo_title']); ?></title>

		<!-- dns prefetch -->
		<link href="//www.google-analytics.com" rel="dns-prefetch">

		<!-- meta -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<meta name="description" content="<?php ifecho($main->post->fields['seo_description']); ?>">
		<meta name="keywords" content="<?php ifecho($main->post->fields['seo_keywords']); ?>">

		<!-- icons -->
		<link rel="apple-touch-icon" sizes="175x175" href="<?php echo TEMPLATE_DIRECTORY_URI;?>/static/img/favicon/favicon-175x175.png">
		<link rel="icon" type="image/png" sizes="96x96" href="<?php echo TEMPLATE_DIRECTORY_URI;?>/static/img/favicon/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="32x32" href="<?php echo TEMPLATE_DIRECTORY_URI;?>/static/img/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?php echo TEMPLATE_DIRECTORY_URI;?>/static/img/favicon/favicon-16x16.png">
		<link rel="manifest" href="/favicons/manifest.json">
		<meta name="theme-color" content="#ffffff">

		<meta property="og:url"           content="<?php echo $main->post->permalink;?>" />
		<meta property="og:type"          content="website" />
		<meta property="og:title"         content="<?php ifecho($main->post->fields['og_title']); ?>" />
		<meta property="og:description"   content="<?php ifecho($main->post->fields['og_description']); ?>" />
		<meta property="og:image"         content="<?php ifecho($main->post->fields['og_image']); ?>" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="<?php ifecho($main->post->fields['og_title']); ?>" />
		<meta name="twitter:description" content="<?php ifecho($main->post->fields['og_description']); ?>" />
		<meta name="twitter:image" content="<?php ifecho($main->post->fields['og_image']); ?>" />

	</head>
	<body class="<?php echo $main->post->template;?>" data-main="">

		<header class="html-header wrapper--global">

			<a class="html-header__logo" href="<?php echo $main->languages->lang_dir; ?>">LOGO</a>

			<div class="html-header__menu--mobile"></div>

			<div class="html-header__menu">
				<?php $main->templatefunctions->menu('main'); ?>
				<?php $main->languages->langSelector(); ?>
			</div>

			<?php
				if (!in_array("html_header",$main->post->modules)){
				  array_push($main->post->modules, "html_header");
				}
			?>

		</header>

		<div id="barba-wrapper" class="wrapper--global">
			<div class="barba-container">
