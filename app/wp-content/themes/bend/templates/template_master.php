<?php if( !empty($main->post->fields['header_padding']) ) { ?>
  <div class="header_padding"></div>
<?php } ?>
<?php
if( !empty($main->post->fields['blocks']) ) {
  foreach( $main->post->fields['blocks'] as $block ){
    if( $block['acf_fc_layout'] == 'custom' ){
    echo "<div class='block block-".$block['module_name']."'>";
      include('blocks/'.$block['module_name'].'/back.php');
    }else{
    echo "<div class='block block-".$block['acf_fc_layout']."'>";
      include('blocks/'.$block['acf_fc_layout'].'/back.php');
    }
    echo "</div>";
  }
}
