<?php

class Counters extends App {
  public $counters = array();
  public function runCounters ($module, $h1 = ""){
    if (isset($this->counters[$module])) {
      $this->counters[$module]++;
    }else{
      $this->counters[$module] = 1;
    }
    if(!empty($h1)){
      if (isset($this->counters['headings'])) {
        $this->counters['headings'] = 2;
      }else{
        $this->counters['headings'] = 1;
      }
    }
    return $this->counters['headings'];
  }
};

$main->counters  = new Counters;

// pr2( $main->counters );
