// ---> Shared
import Menu from './shared/Menu'
import Transition from './shared/Transition'

export default class App {
  constructor() {
    this.menu = new Menu({
      preventParentClick: true,
    })
    this.transition = new Transition()
  }
}
