let defaultCity = '上海'
try {
  if (window.localStorage.city) {
    defaultCity = window.localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
