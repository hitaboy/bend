<?php include 'wp-content/themes/bend/dist/header.php' ?>

	<!-- section -->
	<?php
	$sectionClass= "section--page ".$main->post->post_name;
	if (is_front_page()){
		if (!in_array("home",$main->post->modules)){
			array_push($main->post->modules, "home");
		}
		$sectionClass= "section--home";
	}
	?>

	<section role="main" class="<?php echo $sectionClass; ?>">

		<?php require_once("template_master.php"); ?>

	</section>
	<!-- /section -->

	<div class="data" data-modules="<?php echo implode(',',$main->post->modules);?>"></div>
	<?php isset($main->post->fields['header_background']) ?: $main->post->fields['header_background'] = 0; ?>
	<div class="options" data-headerBackground="<?=$main->post->fields['header_background'];?>"></div>

<?php include 'global/footer.php' ?>
