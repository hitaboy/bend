<div class="block--<?php echo $data->fields['acf_fc_layout']." ".$data->fields['type']; ?> <?php if($data->fields['type']=='big'){ echo 'wrapper--global'; }else{ echo 'wrapper--internal'; } ?>">

  <h<?=$data->h;?> class='block--title__title'><?php echo $data->fields['title']; ?></h<?=$data->h;?>>

</div>

<?php
/*
if (!in_array("title",$main->post->modules)){
  array_push($main->post->modules, "title");
}
*/
// pr2($data->fields);
?>
