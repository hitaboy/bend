<div class="block--<?php echo $data->fields['acf_fc_layout']." ".$data->fields['type']." ".$data->fields['width']; ?> wrapper--global">

  <?php if( $data->fields['type'] == 'one' ){ ?>
    <?php
    $image = "";
    if($data->fields['resolution'] == '1920') {
      if(!empty($data->fields['image_1920'])){
        $image = $main->templatefunctions->get_picture( $data->fields['image_1920'] );
      }
    }else{
      if(!empty($data->fields['image']) && empty($data->fields['video']) ){
        $image = $main->templatefunctions->get_picture( $data->fields['image'] );
      }
      if(!empty($data->fields['image_wrapper'])) {
        $image = $main->templatefunctions->get_picture( $data->fields['image_wrapper'] );
      }
    }
    if(empty($data->fields['video'])){
    ?>
    <div class="block--media__image">
      <?php echo $image; ?>
    </div>
    <?php } ?>

    <?php if(!empty($data->fields['video'])){ ?>
      <div class="block--media__video" v-bind:class="{'block--media__video--playing': playing}">
        <?php if(!empty($data->fields['image']) || !empty($data->fields['image_1920'])){ ?>
          <div class="block--media__video__play" v-on:click="play()"></div>
          <div class="block--media__video__poster">
            <?php if(!empty($data->fields['image'])){ ?>
              <?php echo $main->templatefunctions->get_picture( $data->fields['image'] ); ?>
            <?php }else{ ?>
              <?php echo $main->templatefunctions->get_picture( $data->fields['image_1920'] ); ?>
            <?php } ?>
          </div>
        <?php } ?>
        <video width="320" height="240" ref="video" v-on:click="stop()" <?php if(empty($data->fields['image']) && empty($data->fields['image_1920'])){ echo "autoplay loop class='autoplay'"; }; ?>>
	         <source src="<?php echo $data->fields['video']['url']; ?>" type="video/mp4">
	         Your browser does not support the video tag.
        </video>
      </div>
    <?php } ?>
  <?php }else if( $data->fields['type'] == 'two' ){ ?>
    <div class="block--media__two">
      <?php if(!empty($data->fields['image_1'])){ ?>
        <div class="block--media__two__image block--media__two__image--1">
          <?php echo $main->templatefunctions->get_picture( $data->fields['image_1'] ); ?>
        </div>
      <?php } ?>
      <?php if(!empty($data->fields['image_2'])){ ?>
        <div class="block--media__two__image block--media__two__image--2">
          <?php echo $main->templatefunctions->get_picture( $data->fields['image_2'] ); ?>
        </div>
      <?php } ?>
    </div>
  <?php }else if( $data->fields['type'] == 'slideshow' ){ ?>
    <?php if( !empty($data->fields['slideshow']) ) { ?>
      <div class="block--media__slideshow">
        <?php foreach( $data->fields['slideshow'] as $slide ){ ?>
          <div class="block--media__slideshow__slide">
            <?php echo $main->templatefunctions->get_picture( $slide['image'] ); ?>
          </div>
        <?php } ?>
      </div>
    <?php } ?>
  <?php }else if( $data->fields['type'] == 'grid' ){ ?>
    <div class="block--media__grid wrapper--internal">
      <?php foreach( $data->fields['grid'] as $item ){ ?>
        <div class="block--media__grid__item">
          <img src="<?php echo $item['image']; ?>" />
        </div>
      <?php } ?>
    </div>
  <?php } ?>

</div>

<?php
if (!in_array("media",$main->post->modules)){
  array_push($main->post->modules, "media");
}
// pr2($data->fields);
?>
