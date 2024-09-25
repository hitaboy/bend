<script>

    let show = false

</script>

<div class="bg-orange-500">
    <button on:click={()=>{
        show = !show
    }}>Show me the content</button>
    {#if show}
        <div>This is a hidden content</div>
    {/if}
    
</div>