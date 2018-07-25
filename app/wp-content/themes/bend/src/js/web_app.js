import Barba from 'barba.js'
import './utils/BarbaStuff.js'
import Caniuse from './utils/caniuse.js'
import Global from './global.js'
import Header from './modules/header.js'
import Grid from './modules/grid.js'
import Media from './modules/media.js'
import HtmlHeader from './modules/html_header.js'
import Work from './modules/work.js'

var global
global = window || global
global.logging = true

window.addEventListener('load', function (event) {
  global.main = new Global()
  global.main.caniuse = new Caniuse()
  global.main.header = new Header()
  global.main.grid = new Grid()
  global.main.media = new Media()
  global.main.html_header = new HtmlHeader()
  global.main.work = new Work()
  global.main.resetModules()
  Barba.Pjax.start()
})
