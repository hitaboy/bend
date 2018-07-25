<?php

if (!class_exists('Media')) {
  class Media {
    public $h;
    function __construct() {
      // $this->template = 'front_base.php';
      global $block;
      global $main;
      $this->fields = $block;
      if(!empty($this->fields['image'])){
        $this->fields['image'] = $main->templatefunctions->generateImageSizesArray($this->fields['image']);
      }
      if(!empty($this->fields['image_1920'])){
        $this->fields['image_1920'] = $main->templatefunctions->generateImageSizesArray($this->fields['image_1920']);
      }
      if(!empty($this->fields['image_wrapper'])){
        $this->fields['image_wrapper'] = $main->templatefunctions->generateImageSizesArray($this->fields['image_wrapper']);
      }
      if(!empty($this->fields['image_1'])){
        $this->fields['image_1'] = $main->templatefunctions->generateImageSizesArray($this->fields['image_1']);
      }
      if(!empty($this->fields['image_2'])){
        $this->fields['image_2'] = $main->templatefunctions->generateImageSizesArray($this->fields['image_2']);
      }
      if(!empty($this->fields['slideshow'])){
        foreach($this->fields['slideshow'] as $key => $slide){
          $this->fields['slideshow'][$key]['image'] = $main->templatefunctions->generateImageSizesArray($slide['image']);
        }
      }
      // H counter
      if (!empty($this->fields['text'])) {
        $this->h = $main->counters->runCounters('media', $this->fields['text']);
      }else{
        $this->h = 1;
      }
    }
  }
}

$data = new Media();
include('front.php');
// include(getcwd().'/wp-content/themes/bend/templates/blocks/header/front.php');
