<script>
  
  import { onMount } from "svelte";
  
  export let dump
  let data = JSON.parse(dump)
  console.log(data)
  let open = false
</script>


  <div class="relative flex justify-end rounded-full bg-white text-black px-2 m-2">
    <div class="flex gap-3 overflow-hidden transition-all duration-1000 w-auto {open ? 'max-w-screen-lg pl-3' : 'max-w-0'}">
      {#each data.items as item}
        <a 
            href={item.permalink}
            class="whitespace-nowrap flex items-center first-of-type:rounded-t-md last-of-type:rounded-b-md text-left text-sm hover:text-white"
        >
           {item.post_title}
        </a>
      {/each}
    </div>
    <div class="px-3 py-1.5 cursor-pointer"
    on:click={()=>{
      open =!open
    }}>Menu</div>
  </div>
