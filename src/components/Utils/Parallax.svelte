<script>
    
    /*

    Parallax component
    ------------------
    Usage:
    <Parallax debug={true} let:percent>
        <div class="absolute top-0 left-0 h-full bg-primary opacity-50"
        style="width:{percent}%;"></div>
        {#each Array(3) as _,i}
            <div class="w-full h-[400px]">
                Hola {i}
            </div>
        {/each}
    </Parallax> 

    */

    import { onMount } from 'svelte'
    export let debug = false
    export let percent = 0
    export let detector = 50
    export let start = 0
    export let finish = 100
    let scrollY = 0
    let detectorY = 50
    let startElement
    let startBox
    let block
    let blockElement
    let windowHeight = 0
    let innerWidth = 0
    let windowHeight_bkp = 0
    let innerWidth_bkp = 0
    let loaded = false;
    let blockPosition = 0
    let parallaxHeight = 0

    onMount(()=>{
        calculacions()
        loaded = true
    })

    function calculacions(){
        block = blockElement.getBoundingClientRect()
        startBox = startElement.getBoundingClientRect()
        detectorY = windowHeight*detector/100
        evaluate()
    }

    function evaluate(){
        parallaxHeight = (block?.height*finish/100)-(block?.height*start/100)
        blockPosition = Math.min(parallaxHeight,Math.max(0,(startBox?.top-detectorY)*-1))
        percent = (blockPosition*100)/parallaxHeight
        
    }

    $: if(loaded == true){
        if(windowHeight != windowHeight_bkp || innerWidth != innerWidth_bkp){
            windowHeight_bkp = windowHeight
            innerWidth_bkp = innerWidth
            calculacions()
        }
    }
</script>
<div class="w-full relative" bind:this={blockElement}>
    {#if debug}
    <div class="fixed top-1/2 left-4 text-xs font-bold flex flex-col p-4 bg-black/50 rounded z-50">
        <div>{percent.toFixed(1)+"%"}</div>
    </div>
    {/if}
    <slot {percent}>
        There is no slot...
    </slot>
    <div class="fixed left-0 w-full h-0 {debug?'border border-primary':'opacity-0'}" style="top:{detector}%;"></div>
    <div class="absolute left-0 w-full h-0 {debug?'border border-green-500':'opacity-0'}" style="top:{start}%;"
     bind:this={startElement}></div>
    <div class="absolute left-0 w-full h-0 {debug?'border border-red-500':'opacity-0'}" style="top:{finish}%;"></div>
</div>

<svelte:window bind:scrollY={scrollY} bind:innerWidth={innerWidth} bind:innerHeight={windowHeight} on:scroll={calculacions} ></svelte:window>