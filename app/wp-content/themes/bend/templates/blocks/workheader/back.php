<?php

if (!class_exists('WorkHeader')) {
  class WorkHeader {
    public $h;
    function __construct() {
      // $this->template = 'front_base.php';
      global $block;
      global $main;
      $this->fields = $block;
      if(!empty($this->fields['image'])){
        $this->fields['image'] = $main->templatefunctions->generateImageSizesArray($this->fields['image']);
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

$data = new WorkHeader();
include('front.php');
// include(getcwd().'/wp-content/themes/bend/templates/blocks/header/front.php');
