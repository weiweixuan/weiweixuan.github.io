import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Field, Rate, Search, Image, Popup, Icon } from 'vant'

Vue.use(Button)
  .use(Field)
  .use(Rate)
  .use(Search)
  .use(Image)
  .use(Popup)
  .use(Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
