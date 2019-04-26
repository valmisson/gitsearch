import Vue from 'vue'
import Vuex from 'vuex'
import RootStore from './root'

Vue.use(Vuex)

export default new Vuex.Store({
  ...RootStore
})
