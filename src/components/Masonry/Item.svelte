<script>
    export let item
    let heightClass = ''
    if(item.size == 'small'){
        heightClass = 'h-[300px]'
    }else if(item.size == 'big'){
        heightClass = 'h-[500px]'
    }
</script>
<div class="bg-zinc-800 rounded-xl p-8 {heightClass}">
    <div class="text-2xl">{item.item.post_title}</div>
    <a href={item.item.permalink} class="text-zinc-500">View more</a>
</div>