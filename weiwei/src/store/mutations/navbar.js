import { CHANGE_NAVBAR } from '../mutation-types/navbar'
console.log(CHANGE_NAVBAR, 'hhhhhhhhhh')
export default {
  [CHANGE_NAVBAR](state, key) {
    state.navbar = state.navbar.map((element, index) => {
      if (index == key) {
        element.checked = true
      } else {
        element.checked = false
      }
      return element
    })
  }
}
