import Vue from 'vue'
import Vuex from 'vuex'
import side from './side'
import loginStatus from './login'

Vue.use(Vuex);
const store= new Vuex.Store({
    state:{
      tooken:123
    },
    modules:{
      side,
      loginStatus
    }
})

export default  store
