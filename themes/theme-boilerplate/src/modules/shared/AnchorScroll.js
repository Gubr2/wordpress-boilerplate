export default class AnchorScroll {
  constructor() {
    this.selector = null
  }

  set() {
    this.selector = document.querySelectorAll('a')

    this.selector.forEach((_link) => {
      _link.addEventListener('click', (_e) => {
        if (_link.hash && _link.pathname == window.location.pathname) {
          _e.preventDefault()

          document.querySelector(_link.hash).scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }
}
