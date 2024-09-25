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
<div id="<?php echo $block_id; ?>" class="<?php echo $class_name; ?> bg-red-500">
    <?php
    /*
        if ( $data['example_field']) {
            echo "<p>" . $data['example_field'] . "</p>";
        }

        if ( $data['another_field']) {
            echo "<p>" . $data['another_field'] . "</p>";
        }
            */
    ?>


    <div x-data>
        <div x-data="dropdown">
            <button x-on:click.stop="toggle">Expand</button>
            <div x-text="open"></div>
            <div x-show="open">
                <p>Expanded content</p>
                <InnerBlocks />
            </div>
        </div>
    </div>

</div>