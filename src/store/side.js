const showSide = {
  state:{
    sideNav:false,
    mesgmun:111,
    backbtn:true
  },
  mutations:{
    showSidenav(state){
      if(state.sideNav){
        state.sideNav=false;
      }else{
        state.sideNav=true;
      }
    },
    hideSideNav(state){
      state.sideNav=false;
    },
    addMessage(state){
      state.mesgmun++;
    },
    showBack(state){
      state.backbtn=true;
    },
    hideBack(state){
      state.backbtn=false;
    }
  },
  actions:{
    showSidenav ({ commit }) {
      commit('showSidenav')
    },
    hideSideNav({commit}){
      commit('hideSideNav')
    },
    addMessage({commit}){
      commite('addMessage')
    },
    showBack({commit}){
      commit('showBack')
    },
    hideBack({commit}){
      commit('hideBack')
    }
  }
}

export default showSide;
