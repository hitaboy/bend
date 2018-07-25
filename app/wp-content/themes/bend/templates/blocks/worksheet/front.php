<div class="block--<?php echo $data->fields['acf_fc_layout']; ?> global-wrapper">

  <h<?=$data->h;?> class='block--worksheet__title'><?php echo $data->fields['title']; ?></h<?=$data->h;?>>

  <?php foreach ($data->fields['items'] as $item){ ?>
    <div class='block--worksheet__item'>
      <div class='block--worksheet__item__label'>
        <?php echo $item['label']; ?>&nbsp;
      </div>
      <div class='block--worksheet__item__description'>
        <?php echo $item['description']; ?>
      </div>
    </div>
  <?php } ?>
  <?php // pr2($data->fields);?>
</div>

<?php
/*
if (!in_array("header",$main->post->modules)){
  array_push($main->post->modules, "header");
}
*/
// pr2($data->fields);
?>
