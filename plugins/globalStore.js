// plugins/globalStore.js
import Vue from 'vue'

export default ({ app, store }) => {
  // Inject the store into the Vue instance prototype
  Vue.prototype.$store = store
}
