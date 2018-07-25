<?php

if (!class_exists('Header')) {
  class WorkSheet{
    public $h;
    function __construct() {
      // $this->template = 'front_base.php';
      global $block;
      global $main;
      $this->fields = $block;
      if (!empty($this->fields['text'])) {
        $this->h = $main->counters->runCounters('header', $this->fields['text']);
      }else{
        $this->h = 1;
      }
    }
  }
}

$data = new WorkSheet();
include('front.php');
// include(getcwd().'/wp-content/themes/bend/templates/blocks/header/front.php');
