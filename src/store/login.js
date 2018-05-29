import { getTooken, setTooken, removeTooken } from '../utills/cookie.js'
import { login } from '../utills/request.js'
const loginStatus = {
  state: {
    tooken: '',
    isLogin:false
  },
  mutations: {
    fetchTooken (state) {
      state.tooken = getTooken();
    },
    setTooken () {
      setTooken()
    },
    delTooken () {
      removeTooken()
    },
    changeLoginStatus(state){
      state.isLogin=true;
    }
  },
  actions: {
    fetchTooken ({commit}) {
      commit('fetchTooken')
    },
    setTooken ({commit}) {
      commit('setTooken')
    },
    delTooken ({commit}) {
      commit('delTooken')
    },
    changeLoginStatus({commit}){
      commit('changeLoginStatus')
    }
  }
}

export default loginStatus

