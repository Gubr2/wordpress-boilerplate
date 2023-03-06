/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// *** RESPONSIVE SPACER FOR WORDPRESS by Adrián Gubrica, v1.0 *** //
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////// Variables /////////////////

// ---> input [string] - Expects a breakpoint number (defaultly, it should be 781), and the value, which the height of the spacer should be multiplied

export default class ResponsiveSpacer {
  constructor(_input) {
    this.selector = [...document.querySelectorAll('.wp-block-spacer')]
    this.heights = this.selector.map((_spacer) => {
      return {
        height: _spacer.style.height.replace(/\D/g, ''),
        metric: _spacer.style.height.replace(/[^a-zA-Z]+/g, ''),
      }
    })

    if (this.selector) {
      window.addEventListener('resize', () => {
        if (window.innerWidth < _input.breakpoint) {
          this.setHeight(_input.amount)
        } else {
          this.setHeight(1)
        }
      })
    }
  }

  setHeight(_amount) {
    this.selector.forEach((_spacer, _index) => {
      _spacer.style.height = `${this.heights[_index].height * _amount}${this.heights[_index].metric}`
    })
  }
}
