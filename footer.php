	
		<?php dynamic_sidebar( 'footer-1' ); ?>
		<?php dynamic_sidebar( 'footer-2' ); ?>
		<?php dynamic_sidebar( 'footer-3' ); ?>
	<!-- Closing wrapper global -->
	</div>

	<div id="app-cookies">
		<div class="cookies-advice" v-bind:class="{'cookies-advice--active': cookiesAccept}">
			<?php
			echo __("This website uses its own and third-party cookies to improve the browsing experience and offer content and services of interest. If you continue browsing, we consider that you accept its use.","bend");
			?>
			<div class="cookies-advice__close" @click="acceptCookies">
				<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64"><path fill="#FFF" d="M28.941 31.786L.613 60.114a2.014 2.014 0 1 0 2.848 2.849l28.541-28.541 28.541 28.541c.394.394.909.59 1.424.59a2.014 2.014 0 0 0 1.424-3.439L35.064 31.786 63.41 3.438A2.014 2.014 0 1 0 60.562.589L32.003 29.15 3.441.59A2.015 2.015 0 0 0 .593 3.439l28.348 28.347z"/></svg>
			</div>
		</div>
	</div>

	<?php wp_footer(); ?>

	<script>
		var ajax_url = "<?php echo $post->site_url."/wp-admin/admin-ajax.php"; ?>";
	</script>

	<?php pr2($post); ?>

	</body>

</html>
