<script>
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting;
  import { onMount } from "svelte";
  
  export let dump
  let data = JSON.parse(dump)
</script>


<p>Nael Swimwear {intersecting}</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis interdum
  augue nec sollicitudin. Etiam suscipit rutrum mauris eu laoreet. Cras
  tincidunt mollis enim quis molestie. 
</p>
<IntersectionObserver {element} bind:intersecting once>
<div bind:this={element} class="transition-all duration-1000 delay-300 translate-x-1/2 {intersecting?'out':''}">
  <img
    src={data.image}
  />
</div>
</IntersectionObserver>

<style>
  .out {
    transform: translateX(0);
  }
</style>