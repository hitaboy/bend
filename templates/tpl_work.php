<?php include 'wp-content/themes/bend/dist/header.php' ?>

	<!-- section -->
	<?php
	$sectionClass= "section--work";
	?>

	<section role="main" class="<?php echo $sectionClass; ?>">

		<?php require_once("template_master.php"); ?>

		<div class="work_footer">
			<?php
			$next_post_id = get_adjacent_post(false,'',false);
			$prev_post_id = get_adjacent_post(false,'',true);
			?>
			<?php if(!empty($next_post_id)){ ?>
				<a class="work_footer__prev" href="<?php echo get_permalink($next_post_id->ID); ?>"><?php echo __('prev','herraizsoto'); ?></a>
			<?php } ?>
			<?php if(!empty($prev_post_id)){ ?>
				<a class="work_footer__next" href="<?php echo get_permalink($prev_post_id->ID); ?>"><?php echo __('next project','herraizsoto'); ?></a>
			<?php } ?>
		</div>

	</section>
	<!-- /section -->
	<?php
	if (!in_array("work",$main->post->modules)){
		array_push($main->post->modules, "work");
	}
	?>
	<div class="data" data-modules="<?php echo implode(',',$main->post->modules);?>"></div>
	<?php isset($main->post->fields['header_background']) ?: $main->post->fields['header_background'] = 0; ?>
	<div class="options" data-headerBackground="<?=$main->post->fields['header_background'];?>"></div>

<?php include 'global/footer.php' ?>
