<?php

global $main;

class App {

  public function __call($method, $args){
    if (isset($this->$method)) {
      $func = $this->$method;
      return call_user_func_array($func, $args);
    }
  }
  public $post_types = array('post');

}

$main = new App();
