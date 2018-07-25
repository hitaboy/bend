import $ from 'jquery'
import Barba from 'barba.js'
import './BarbaStuff.js'
//import './jquery.hover3d.js'
//import './jquery.visible.js'
import Point from './unicorn.js'
import Global from './global.js'
import Home from './home.js'
import Works from './works.js'
import SingleWork from './singlework.js'
import Culture from './culture.js'
import Services from './services.js'
import Contact from './contact.js'

var global = window || global

$(window).on('load', function () {
  console.log("Window loaded")
  $(window).on('scroll', function (e){
    $('.autoplay').each(function(){
      if( $(this).isOnScreen() ){
        $(this).addClass('playing').find('video')[0].play()
      }else{
        $(this).removeClass('playing').find('video')[0].pause()
      }
    })
  })
  global.main = new Global()
  global.main.actual_page = $('.gsection').data('main')
  global.main.tpl_HOME = new Home()
  global.main.tpl_WORKS = new Works()
  global.main.tpl_SINGLEWORK = new SingleWork()
  global.main.tpl_CULTURE = new Culture()
  global.main.tpl_SERVICES = new Services()
  global.main.tpl_CONTACT = new Contact()
  global.main[main.actual_page].reset()
  Barba.Pjax.start()
})

$.fn.isOnScreen = function(){

    var win = $(window)

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    }
    viewport.right = viewport.left + win.width()
    viewport.bottom = viewport.top + win.height()

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth()
    bounds.bottom = bounds.top + this.outerHeight()

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}
