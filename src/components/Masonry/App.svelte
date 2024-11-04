<script>
    import Masonry from 'svelte-bricks'
    import Item from "./Item.svelte";

    export let dump
    let data = JSON.parse(dump)
    console.log(data)

    let nItems = 10
    $: items = data.items.map((item,i)=>{
        return {...item, id: i}
    })

    let [minColWidth, maxColWidth, gap] = [520, 900, 20]
    let width, height
</script>
    
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-full text-white px-[20px]">
    
    <Masonry
        {items}
        {minColWidth}
        {maxColWidth}
        {gap}
        let:item
        animate={true}
        duration={200}
        bind:masonryWidth={width}
        bind:masonryHeight={height}
    >
    <Item {item} />
    </Masonry>
    
</div>