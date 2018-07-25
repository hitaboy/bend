<div class='block--grid wrapper--global'>
  <div class='block--grid__header'>
    <div class='block--grid__header__wrapper'>
      <h<?=$data->h;?> class='block--grid__header__title'><?php echo $data->fields['title']; ?></h<?=$data->h;?>>
    </div>
  </div>
  <?php if(!empty($data->fields['description'])){ ?>
    <div class='block--grid__header__description'><?php echo $data->fields['description']; ?></div>
  <?php } ?>
  <div class='block--grid__cats'>
    <?php
    foreach ($data->fields['term'] as $term){
      $actual_class = '';
      if ($term->term_id == $data->tax_query[0]['terms']){
        $actual_class = 'actual';
      }
    ?>
      <a href="<?php echo $main->methods->getPermalink($term->slug); ?>" class="<?php echo $actual_class; ?>"><?php echo $term->name; ?></a>
    <?php } ?>
  </div>
  <div class='block--grid__scroll'>
      <div class='block--grid__wrapper' id='fullpage'>
        <div class='block--grid__post block--grid__post--top section'></div>
        <?php foreach( $data->posts as $index => $post ){ ?>
          <div class='block--grid__post section' data-anchor="<?php echo $post->post_name; ?>">
            <div class="block--grid__thumbnail block--grid__thumbnail--desktop">
              <?php if(!empty($post->fields['thumbnail_desktop'])){ ?>
                <a href="<?php echo $post->fields['permalink']; ?>">
                  <?php echo $main->templatefunctions->get_picture( $post->fields['thumbnail_desktop'] ); ?>
                </a>
              <?php } ?>
            </div>
            <div class="block--grid__thumbnail block--grid__thumbnail--mobile">
              <?php if(!empty($post->fields['thumbnail_mobile'])){ ?>
                <a href="<?php echo $post->fields['permalink']; ?>">
                  <?php echo $main->templatefunctions->get_picture( $post->fields['thumbnail_mobile'] ); ?>
                </a>
              <?php } ?>
            </div>
            <div class="block--grid__post__label">
              <a href="<?php echo $post->fields['permalink']; ?>">
                <span>
                <?php
                  foreach ($post->fields['options']['work_category'] as $work_category){
                    if ($work_category->slug != __('all','bend')){
                      echo $work_category->name;
                    }
                  }
                ?>
              </span>
              </a>
            </div>
          </div>
        <?php } ?>
      </div>
  </div>
</div>
<?php
if (!in_array("grid",$main->post->modules)){
  array_push($main->post->modules, "grid");
}
pr2($data);
?>
