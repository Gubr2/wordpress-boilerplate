// ---> External
import ResponsiveSpacer from './external/responsive-spacer/ResponsiveSpacer'

// ---> Shared
import Menu from './shared/Menu'

export default class App {
  constructor() {
    this.menu = new Menu({
      preventParentClick: true,
    })
    this.responsiveSpacer = new ResponsiveSpacer({
      breakpoint: 781,
      amount: 0.5,
    })
  }
}
