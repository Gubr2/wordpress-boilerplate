import './responsivespacer-frontend.scss'

const selector = [...document.querySelectorAll('.responsive-spacer')]
const breakpoints = {
  tablet: 1024,
  mobile: 600,
}

function set() {
  selector.forEach((_selector) => {
    const desktop = _selector.getAttribute('data-desktop')
    const tablet = _selector.getAttribute('data-tablet')
    const mobile = _selector.getAttribute('data-mobile')

    if (window.innerWidth > breakpoints.tablet) {
      // For Desktop
      _selector.style.height = `${desktop}rem`
    } else if (window.innerWidth <= breakpoints.tablet && window.innerWidth > breakpoints.mobile) {
      // For Tablet
      _selector.style.height = `${tablet}rem`
    } else if (window.innerWidth <= breakpoints.mobile) {
      // For Mobile
      _selector.style.height = `${mobile}rem`
    }
  })
}

// INIT
set()

window.addEventListener('resize', () => {
  set()
})
