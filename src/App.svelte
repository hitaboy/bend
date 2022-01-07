<script>
	import Media from './mods/Media.svelte'
	import Video from './mods/Video.svelte'
	import Slider from './mods/Slider.svelte'
	export let modType
	export let data;
</script>

{#if modType == 'Media'}
	<Media data={data} />
{:else if modType == 'Video'}
	<Video data={data} />
{:else if modType == 'Slider'}
	<Slider data={data} />
{/if}