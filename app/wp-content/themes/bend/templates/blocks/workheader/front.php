<div class="block--workheader wrapper--global">

    <?php if(!empty($data->fields['image']) && empty($data->fields['video']) ){ ?>
      <div class="block--workheader__image">
        <?php echo $main->templatefunctions->get_picture( $data->fields['image'] ); ?>
      </div>
    <?php } ?>
    <?php if(!empty($data->fields['video'])){ ?>
      <div class="block--workheader__video" v-bind:class="{'block--media__video--playing': playing}">
        <div class="block--workheader__video__play" v-on:click="play()"></div>
        <?php if(!empty($data->fields['image'])){ ?>
          <div class="block--workheader__video__poster">
            <?php echo $main->templatefunctions->get_picture( $data->fields['image'] ); ?>
          </div>
        <?php } ?>
        <video width="320" height="240" loop="" ref="video" v-on:click="stop()">
	         <source src="<?php echo $data->fields['video']['url']; ?>" type="video/mp4">
	         Your browser does not support the video tag.
        </video>
      </div>
    <?php } ?>

    <div class="block--workheader__data">
      <div class="block--workheader__data__center">
        <span><?php echo $main->post->fields['miniatura']['client']; ?></span>
        <span class="line"></span>
        <span><?php echo $main->post->fields['miniatura']['project_name']; ?></span>
      </div>
    </div>

</div>
<div class="block--workheader__scrollTrigger"></div>

<?php
if (!in_array("media",$main->post->modules)){
  array_push($main->post->modules, "media");
}
// pr2($main->post);
?>
