// import $ from 'jquery'
class HtmlHeader {
  constructor () {
    let vm = this
    let menuMobile = document.querySelector('.html-header__menu--mobile')
    let menu = document.querySelector('.html-header__menu')
    menuMobile.addEventListener('click', function() {
      vm.toggleMenu(menu)
    }, false)
    let menuItems = document.querySelectorAll('.menu-item a')
    Array.from(menuItems).forEach(link => {
        link.addEventListener('click', function(event) {
          vm.toggleMenu(menu)
        })
    })
  }
  reset () {

  }
  toggleMenu (menu) {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  }
}
export default HtmlHeader
