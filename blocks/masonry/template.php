<?php
/**
 * Block Name: My First Block
 *
 * Description: Displays my very first block.
 */

// The block attributes
$block = $args['block'];

// The block data
$data = $args['data'];

// The block ID
$block_id = $args['block_id'];

// The block class names
$class_name = $args['class_name'];
?>

<!-- Our front-end template -->
<div 
    id="<?php echo $block_id; ?>" 
    class="bendblock bg-black <?php echo $class_name; ?>" 
    data-type="svelte" 
    data-component="Masonry" 
    data-dump='<?php echo htmlspecialchars(json_encode($data)); ?>'
>
    <div class="w-full text-white px-[20px]">
        <div class="masonry">
            <div class="col">
                <div class="">
                    <?php foreach ($data['items'] as $item) { ?>
                    <div class="bg-red-500 rounded-xl p-8">
                        <div class="text-2xl"><?php echo $item['item']->post_title; ?></div>
                        <a href="<?php echo $item['item']->permalink; ?>">View more</a>
                    </div>
                    <!--<Item>--> 
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</div>