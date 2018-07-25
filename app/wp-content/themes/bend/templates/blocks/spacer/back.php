<?php

if (!class_exists('Spacer')) {
  class Spacer {
    public $h;
    function __construct() {
      // $this->template = 'front_base.php';
      global $block;
      global $main;
      $this->fields = $block;
    }
  }
}

$data = new Spacer();
include('front.php');
// include(getcwd().'/wp-content/themes/bend/templates/blocks/header/front.php');
