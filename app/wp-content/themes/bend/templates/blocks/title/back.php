<?php

if (!class_exists('Title')) {
  class Title {
    public $h;
    function __construct() {
      // $this->template = 'front_base.php';
      global $block;
      global $main;
      $this->fields = $block;
      // H counter
      if (!empty($this->fields['text'])) {
        $this->h = $main->counters->runCounters('title', $this->fields['text']);
      }else{
        $this->h = 1;
      }
    }
  }
}

$data = new Title();
include('front.php');
// include(getcwd().'/wp-content/themes/bend/templates/blocks/header/front.php');
