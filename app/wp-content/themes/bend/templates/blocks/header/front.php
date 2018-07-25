<div class="block--<?php echo $data->fields['acf_fc_layout']." ".$data->fields['type']; if( $data->fields['fit_screen'] ){ echo ' fit-screen'; }; ?> wrapper--global">

  <h<?=$data->h;?> class='block--header__claim'><?php echo $data->fields['text']; ?></h<?=$data->h;?>>
  <h<?=$data->h+1;?> class='block--header__claim'><?php echo $data->fields['text']; ?></h<?=$data->h+1;?>>
  <div class="scrollmouse"></div>

</div>

<?php
if (!in_array("header",$main->post->modules)){
  array_push($main->post->modules, "header");
}
// pr2($data->fields);
?>
