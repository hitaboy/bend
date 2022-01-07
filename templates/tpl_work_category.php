<?php get_header('custom'); ?>

	<!-- section -->
	<?php
	$sectionClass= "section--page ".$main->post->post_name;
	if (is_front_page()){
		if(is_array($main->post->modules)){
			if (!in_array("home",$main->post->modules)){
				// array_push($main->post->modules, "home");
			}
		}
		$sectionClass= "section--home";
	}
	?>
	
	<section role="main" class="mainSection <?php echo $sectionClass; ?>">

		<?php require_once("template_master.php"); ?>

	</section>
	<!-- /section -->

<?php include 'global/footer.php' ?>
