export default {
  changeCity (state, city) {
    state.city = city
    try {
      window.localStorage.city = city
    } catch (e) { }
  }
}
