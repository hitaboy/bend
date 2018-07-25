<?php include 'wp-content/themes/bend/dist/header.php' ?>

	<!-- section -->
	<section role="main" class="section--works">

		<?php require_once("template_master.php"); ?>

	</section>
	<!-- /section -->

	<div class="data" data-modules="<?php echo implode(',',$main->post->modules);?>"></div>
	<?php isset($main->post->fields['header_background']) ?: $main->post->fields['header_background'] = 0; ?>
	<div class="options" data-headerBackground="<?=$main->post->fields['header_background'];?>"></div>


<?php include 'global/footer.php' ?>
