<?php

$blocks = array(
    "masonry"
);
foreach ($blocks as $block) {
    register_block_type( get_template_directory() . '/blocks/'.$block.'/block.json' );
}