/* eslint-disable no-unused-vars */
import $ from 'jquery'
import picturefill from 'picturefill'
import Vue from 'vue/dist/vue.js'
import appCookies from './utils/cookies.js'

class Global {
  constructor () {
    this.startCache()
    this.cookies = appCookies
    this.eventType = this.isTouchDevice(true)
    // this.vue
  }
  startCache () {
    this.cache = []
    this.cache['body'] = document.querySelector('body')
    this.cache['.html-header_.nav_ul_li_a'] = document.querySelectorAll('.html-header .nav ul li a')
    this.cache['.html-header'] = document.querySelector('.html-header')
    this.cache['.cookies-advice'] = document.querySelector('.cookies-advice')
  }
  isTouchDevice (noecho) {
    noecho = typeof noecho !== 'undefined' ? noecho : false
    var isTouch = 'ontouchstart' in document.documentElement
    if (noecho) {
      return isTouch
    } else {
      if (isTouch) {
        return 'touchstart'
      } else {
        return 'click'
      }
    }
  }
  resetModules () {
    this.cache['.data'] = document.querySelector('.data')
    let modules = this.cache['.data'].dataset.modules
    global.main.modules = modules.split(',')
    global.main.log(['🍺 %c starting %c Resetting modules', ' color: #f00; background: #000', 'color: #fc0; background: #000'])
    global.main.log(['|-> resetting %c global module ', 'color:#000; background: #fff'])
    global.main.reset()
    if (Array.isArray(global.main.modules)) {
      for (var value of global.main.modules) {
        if (typeof global.main[value] !== 'undefined') {
          global.main.log(['|-> resetting %c ' + value + ' module ', 'color:#000; background: #fff'])
          global.main[value].reset()
        }
      }
    }
  }
  reset () {
    picturefill()
    // GET PAGE OPTIONS
    this.cache['.options'] = document.querySelector('.options')
    // Header Backgorund option
    let headerBackground = this.cache['.options'].dataset.headerbackground
    if (headerBackground === 1) {
      this.cache['.html-header'].classList.add('with_background')
    } else {
      this.cache['.html-header'].classList.remove('with_background')
    }
  }
  log (msg) {
    if (global.logging) {
      if (typeof msg[0] === 'undefined') {
        msg[0] = ''
      }
      if (typeof msg[1] === 'undefined') {
        msg[1] = ''
      }
      if (typeof msg[2] === 'undefined') {
        msg[2] = ''
      }
      console.log(msg[0], msg[1], msg[2])
    }
  }
}
export default Global
