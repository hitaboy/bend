<?php include 'wp-content/themes/bend/dist/header.php' ?>

	<!-- section -->
	<section role="main" class="page_section">

		<?php require_once("templates/template_master.php"); ?>

	</section>
	<!-- /section -->

	<?php
	if (is_front_page()){
		if (!in_array("home",$main->post->modules)){
		  array_push($main->post->modules, "home");
		}
	}
	?>
	<div class="data" data-modules="<?php echo implode(',',$main->post->modules);?>"></div>

<?php include 'global/footer.php' ?>
