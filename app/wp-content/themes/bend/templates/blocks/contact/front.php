<div class="block--<?php echo $data->fields['acf_fc_layout']; ?> wrapper--internal">

  <div class="block--<?php echo $data->fields['acf_fc_layout']; ?>__columns">
  <?php foreach($data->fields['columns'] as $column){ ?>
    <div class="block--<?php echo $data->fields['acf_fc_layout']; ?>__columns__column">
      <div class="block--<?php echo $data->fields['acf_fc_layout']; ?>__columns__column__title">
        <?php echo $column['title']; ?>
      </div>
      <div class="block--<?php echo $data->fields['acf_fc_layout']; ?>__columns__column__text">
        <?php echo $column['text']; ?>
      </div>
    </div>
  <?php } ?>
  </div>

  <div class="block--<?php echo $data->fields['acf_fc_layout']; ?>__columns block--<?php echo $data->fields['acf_fc_layout']; ?>__columns--bottom">
  <?php foreach($data->fields['columns'] as $column){ ?>
    <div class="block--<?php echo $data->fields['acf_fc_layout']; ?>__columns__column">
      <div class="block--<?php echo $data->fields['acf_fc_layout']; ?>__columns__column__bottom">
        <?php if(!empty($column['bottom_link'])){ ?>
          <a href="<?php echo $column['bottom_link']; ?>">
        <?php } ?>
        <?php echo $column['bottom']; ?>
        <?php if(!empty($column['bottom_link'])){ ?>
          </a>
        <?php } ?>
      </div>
    </div>
  <?php } ?>
  </div>

</div>

<?php
/*
if (!in_array("title",$main->post->modules)){
  array_push($main->post->modules, "title");
}
*/
// pr2($data->fields);
?>
