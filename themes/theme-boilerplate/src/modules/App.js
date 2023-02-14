import Menu from './shared/Menu'

export default class App {
  constructor() {
    this.menu = new Menu({
      preventParentClick: true,
    })
  }
}
