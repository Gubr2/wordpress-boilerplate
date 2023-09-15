export default class Transition {
  constructor() {
    this.handleLinks()
  }

  handleLinks() {
    document.querySelectorAll('a').forEach((_link) => {
      _link.addEventListener('click', (_e) => {
        _e.preventDefault()

        this.animateLoadingIn().then(() => {
          this.navigate(_e.target.href)
        })
      })
    })
  }

  animateLoadingIn() {
    return new Promise((_resolve) => {
      // // // // // // // // // // //
      // *** Place Animation Here ***
      // // // // // // // // // // //

      _resolve()
    })
  }

  navigate(_target) {
    window.location.href = _target
  }
}
