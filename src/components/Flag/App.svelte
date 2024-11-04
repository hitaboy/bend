<script>
    import { Canvas, T } from '@threlte/core';
    import { OrbitControls } from '@threlte/extras'
    import Flag from './Flag.svelte';

    let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = ((event.clientX / width)*2)-1;
		m.y = event.clientY / height;
	}

    let width, height; 
</script>
  
<style>
    canvas {
      width: 100vw;  /* Que el canvas ocupe el 100% del ancho de la ventana */
      height: 100vh; /* Que el canvas ocupe el 100% de la altura de la ventana */
      display: block; /* Asegurar que el canvas no tenga márgenes alrededor */
    }
</style>
  
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-full h-screen bg-black" on:mousemove={handleMousemove} bind:clientWidth={width} bind:clientHeight={height}>
    <Canvas>
        <Flag {m} />
    </Canvas>
</div>