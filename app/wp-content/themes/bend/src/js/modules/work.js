import ScrollMagic from 'ScrollMagic'
// import 'debug.addIndicators'
import 'animation.gsap'

class Work {
  reset () {
    var controller = new ScrollMagic.Controller()
    let workheader = new ScrollMagic.Scene({triggerElement: '.block--workheader__data', duration: '100%', offset: '150'})
      .setTween('.block--workheader__image', {opacity: 0, scale: 1.1, top: -100})
      .addTo(controller)
    workheader.triggerHook(1)
    let mediaOnes = document.querySelectorAll('.block--media.one')
    Array.prototype.forEach.call(mediaOnes, function (element, index, array) {
      let blockmediaone = element
      let blockmediaoneImage = element.querySelector('.block--media__image')
      if (blockmediaoneImage) {
        let scene = new ScrollMagic.Scene({triggerElement: blockmediaone, duration: '100%'})
          .setTween(blockmediaoneImage, {opacity: 1, top: 0})
          .addTo(controller)
        scene.triggerHook(1)
      }
    })
  }
}

export default Work
