<div class="block--<?php echo $data->fields['acf_fc_layout']; ?> wrapper--internal">

  <h<?=$data->h;?> class='block--text__title'><?php echo $data->fields['title']; ?></h<?=$data->h;?>>
  <?php if( !empty($data->fields['text']) ){ ?>
    <div class="block--text__texts">
      <?php echo $data->fields['text']; ?>
    </div>
  <?php } ?>
  <?php if( !empty($data->fields['text_1']) ){ ?>
    <div class="block--text__columns">
      <div class="block--text__columns__1">
        <?php echo $data->fields['text_1']; ?>
      </div>
      <div class="block--text__columns__2">
        <?php echo $data->fields['text_2']; ?>
      </div>
    </div>
  <?php } ?>
</div>

<?php
/*
if (!in_array("title",$main->post->modules)){
  array_push($main->post->modules, "title");
}
*/
// pr2($data->fields);
?>
