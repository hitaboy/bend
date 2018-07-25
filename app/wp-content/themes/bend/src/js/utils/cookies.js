/* eslint-disable no-unused-vars */
import Vue from 'vue/dist/vue.js'

window.addEventListener('load', function () {
  var appCookies = new Vue({
    el: '#app-cookies',
    data: {
      cookiesAccept: false,
      unlocked: false
    },
    methods: {
      acceptCookies: function () {
        this.setCookie('legal', 'ok', 1000)
        this.cookiesAccept = !this.cookiesAccept
      },
      checkCookies: function () {
        var cookie = this.getCookie('legal')
        if (!cookie) {
          this.cookiesAccept = true
        }
      },
      getCookie: function (cname) {
        var name = cname + '='
        var decodedCookie = decodeURIComponent(document.cookie)
        var ca = decodedCookie.split(';')
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i]
          while (c.charAt(0) === ' ') {
            c = c.substring(1)
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
          }
        }
        return ''
      },
      setCookie: function (cname, cvalue, exdays) {
        var d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        var expires = 'expires=' + d.toUTCString()
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
      },
      scroll: function () {
        if (this.unlocked) {
          window.removeEventListener('scroll', this.scroll)
        } else {
          if (document.scrollingElement.scrollTop > 100) {
            this.unlocked = true
            this.setCookie('legal', 'ok', 1000)
            this.cookiesAccept = false
          }
        }
        /*
        if (document.body.scrollHeight - window.innerHeight - document.body.scrollTop === 0) {
            // Do what you want when you are at the bottom of the page
        }
        */
      }
    },
    created: function () {
      window.addEventListener('scroll', this.scroll)
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.scroll)
    },
    mounted () {
      this.checkCookies()
    }
  })
})

export let appCookies
