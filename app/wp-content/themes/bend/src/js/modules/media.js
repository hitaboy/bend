/* eslint-disable no-unused-vars */
// import $ from 'jquery'
import Flickity from 'flickity'
import Vue from 'vue/dist/vue.js'

class Media {
  reset () {
    // Videos interaction
    let videos = document.querySelectorAll('.block--media__video:not(.autoplay)')
    let videosCounter = 0
    for (let videoBlock of videos) {
      videosCounter++
      this['app' + videosCounter] = new Vue({
        el: videoBlock,
        data: {
          playing: false
        },
        methods: {
          play: function () {
            this.playing = true
            this.$refs['video'].play()
          },
          stop: function () {
            this.playing = false
            this.$refs['video'].pause()
          }
        },
        mounted () {

        }
      })
    }
    // Slideshow interaction
    let slideShows = document.querySelectorAll('.block--media__slideshow')
    for (let slideshow of slideShows) {
      let flkty = new Flickity(slideshow, {
        // options
        wrapAround: true,
        cellAlign: 'center',
        pageDots: false
      })
    }
  }
}

export default Media
