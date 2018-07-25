<?php

class Languages extends App {
  public $default_language;
  public $lang_dir;
  public $icl_language_code;
  function __construct() {
    if( MULTILINGUAL ){
      $this->icl_language_code = ICL_LANGUAGE_CODE;
      global $sitepress;
      if( !empty($sitepress) ){
        // $main->default_language = $sitepress->get_default_language();
        $this->default_language = $sitepress->get_default_language();
        $this->lang_dir = "/";
        if( $this->icl_language_code != $this->default_language ){
          $this->lang_dir = "/".$this->icl_language_code."/";
        }
      }
    }else{
      $this->default_language = '';
      $this->lang_dir = '';
      $this->icl_language_code = '';
    }
  }
  public function langSelector(){
    global $main;
    $langs = icl_get_languages('skip_missing=1&orderby=KEY&order=DIR&link_empty_to=str');
    $deflangs = array();
    foreach($langs as $index => $lang){
      if(!empty($lang['url'])){
        $deflangs[$index] = $lang;
      }
    }
    if(sizeof($deflangs) > 1) {
    echo "<div class='langs'>";
      foreach($deflangs as $index => $lang){
        $classActual = "";
        if($this->icl_language_code == $index){
          $classActual = " actual";
        }
        $langLink = '';
        if($index != 'es'){
          $langLink = $index;
        }
        echo "<a href='/".$langLink."' class='lang".$classActual."'>".$index."</a>";
      };
    echo "</div>";
    }
  }
}

$main->languages  = new Languages;

// pr2( $main->languages );
