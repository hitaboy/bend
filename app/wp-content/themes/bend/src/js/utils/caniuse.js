import $ from 'jquery'

class Caniuse {
  constructor () {
    this.checkNav()
  }
  checkNav () {
    var ua = navigator.userAgent
    var tem
    var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []

    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || []
      $('body').addClass('noCssGrids')
      return 'IE ' + (tem[1] || '')
    }
    if (M[1] === 'Chrome') {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/)
      if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera')
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?']
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1])
    var browser = M[0]
    var version = M[1]
    // CSS Grid
    if (browser === 'Safari') {
      if (version === '9' || version === '8') {
        $('body').addClass('noCssGrids')
      }
    }
  }
}
export default Caniuse
