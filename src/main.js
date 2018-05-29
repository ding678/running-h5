// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
var fastclick=require('fastclick');
fastclick.attach(document.body);

import { Flexbox, FlexboxItem ,Loading ,LoadMore,XButton,XInput,Group,Cell,Alert} from 'vux'
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('loading', Loading)
Vue.component('load-more', LoadMore)
Vue.component('x-button', XButton)
Vue.component('x-input', XInput)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('alert', Alert)
Vue.use(Vuex)

import axios from 'axios'
/* eslint-disable no-new */
const app=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  watch:{
    $route(to,from){
      this.$store.dispatch('hideSideNav')
      if(to.path=='/'){
        this.$store.dispatch('hideBack');
      }else{
        this.$store.dispatch('showBack');
      }
    }
  }
})
Vue.extend()
