import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/index'
import mutations from './mutations/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {}
})
