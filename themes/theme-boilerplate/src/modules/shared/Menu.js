// // // // // // // // // // // // // // // // // //
// VARIABLES
// // // // // // // // // // // // // // // // // //

// ---> preventParentClick [bool]
//      Zabránenie presmerovania po kliknutí na rodičovské odkazy

// // // // // // // // // // // // // // // // // //

import gsap from 'gsap'
import MenuScroll from '../external/menu-scroll/MenuScroll'

export default class Menu {
  constructor(_settings) {
    this.menuScroll = new MenuScroll({
      distance: 0,
      selector: '.menu__container',
      movementClass: 'menu__container--scrolled',
      backgroundClass: 'menu__container--background',
    })

    this.flags = {
      mobileMenu: true,
    }

    this.selectors = {
      allLinks: [...document.querySelectorAll('.menu__link')],
      desktopMenuDropdownParents: [...document.querySelectorAll('.menu__desktop .menu__item--parent')],
      mobileMenu: document.querySelector('.menu__mobile'),
      mobileMenuIcon: document.querySelector('.menu__mobile__icon'),
      mobileMenuIconLines: [...document.querySelectorAll('.menu__mobile__icon__line')],
      mobileMenuDropdownParents: [...document.querySelectorAll('.menu__mobile .menu__item--parent')],
    }

    // ---> Init
    this.init(_settings)
  }

  init(_settings) {
    this.handleMobileMenu()
    this.handleMobileDropdowns()
    this.handleSmoothHashScroll()
    this.handleDesktopParentsClick(_settings)
    this.removeHashFromCurrent()
  }

  handleMobileMenu() {
    this.selectors.mobileMenuIcon.addEventListener('click', () => {
      if (this.flags.mobileMenu) {
        this.animateMenu('in')
        this.animateIcon('in')
        document.body.style.overflowY = 'hidden'
        this.flags.mobileMenu = false
      } else {
        this.animateMenu('out')
        this.animateIcon('out')
        document.body.style.overflowY = 'scroll'
        this.flags.mobileMenu = true
      }
    })
  }

  handleDesktopParentsClick(_settings) {
    if (_settings.preventParentClick) {
      this.selectors.desktopMenuDropdownParents.forEach((_parent) => {
        _parent.querySelector('.menu__item--parent__link').addEventListener('click', (_e) => {
          _e.preventDefault()
        })

        _parent.querySelector('.menu__item--parent__link').style.cursor = 'default'
      })
    }
  }

  handleMobileDropdowns() {
    this.selectors.mobileMenuDropdownParents.forEach((_parent) => {
      let flag = true

      _parent.querySelector('.menu__item--parent__link').addEventListener('click', (_e) => {
        _e.preventDefault()

        if (flag) {
          this.animateMobileDropdown(_parent, 'in')

          flag = false
        } else {
          this.animateMobileDropdown(_parent, 'out')

          flag = true
        }
      })
    })
  }

  // // // // // // // // // // // // // // // // // // // // //
  // ANIMATE

  animateMenu(_direction) {
    if (_direction == 'in') {
      gsap.to(this.selectors.mobileMenu, {
        x: '0%',
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
        onStart: () => {
          this.selectors.mobileMenu.style.visibility = 'visible'
        },
      })
    } else if (_direction == 'out') {
      gsap.to(this.selectors.mobileMenu, {
        x: '100%',
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
        onComplete: () => {
          this.selectors.mobileMenu.style.visibility = 'hidden'
        },
      })
    }
  }

  animateIcon(_direction) {
    if (_direction == 'in') {
      // ---> Line 1
      gsap.to(this.selectors.mobileMenuIconLines[0], {
        y: '-50%',
        rotate: 45,
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
      })
      // ---> Line 2
      gsap.to(this.selectors.mobileMenuIconLines[1], {
        y: '-50%',
        rotate: -45,
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
      })
    } else if (_direction == 'out') {
      // ---> Line 1
      gsap.to(this.selectors.mobileMenuIconLines[0], {
        y: '100%',
        rotate: 0,
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
      })
      // ---> Line 2
      gsap.to(this.selectors.mobileMenuIconLines[1], {
        y: '-200%',
        rotate: 0,
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
      })
    }
  }

  animateMobileDropdown(_selector, _direction) {
    // ---> In
    if (_direction == 'in') {
      gsap.to(_selector.querySelector('.menu__item__dropdown'), {
        maxHeight: `${_selector.querySelector('.menu__item__dropdown__container').clientHeight}px`,
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
      })

      // [] Icon
      gsap.to(_selector.querySelector('.menu__dropdown__icon'), {
        rotate: 180,
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
      })
      // --- Out
    } else if (_direction == 'out') {
      gsap.to(_selector.querySelector('.menu__item__dropdown'), {
        maxHeight: 0,
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
      })

      // [] Icon
      gsap.to(_selector.querySelector('.menu__dropdown__icon'), {
        rotate: 0,
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
      })
    }
  }

  // // // // // // // // // // // // // // // // // // // // //
  // HASH

  handleSmoothHashScroll() {
    this.selectors.allLinks.forEach((_link) => {
      _link.addEventListener('click', (_e) => {
        if (_link.hash && _link.pathname == window.location.pathname) {
          _e.preventDefault()

          document.querySelector(_link.hash).scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }

  removeHashFromCurrent() {
    this.selectors.allLinks.forEach((_link) => {
      if (_link.hash) {
        _link.parentElement.classList.remove('menu__item--current')
      }
    })
  }
}
