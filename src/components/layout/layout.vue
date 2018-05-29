<template>
  <div class="container">
    <div :class="[{showSideNav:shows},'sidenav']">
      <siderNav></siderNav>
    </div>
    <div class="right-content">
      <topbar></topbar>
      <router-view></router-view>

    </div>
    <div class="mask" v-show="shows" @click="hideSideNav">{{shows}}</div>
  </div>
</template>
<style lang="stylus">
  .container
    position: relative

  .sidenav
    width: 230px
    background #fff
    transition .5s
    position absolute
    top 0px
    left -230px
    height 100vh
    box-shadow 2px 0 4px #fff
    z-index 10

  .showSideNav
    left 0

  .right-content
    position relative

  .mask
    position fixed
    left 0px
    top 0px
    width 100%
    height 100vh
    background rgba(0, 0, 0, 0.5)
</style>
<script>
  import siderNav from './components/siderNav.vue'
  import topbar from './components/topbar.vue'
  import substance from './components/content.vue'
  import { TransferDom } from 'vux'

  export default {
    data () {
      return {
        shows: false
      }
    },
    components: {
      siderNav,
      topbar,
      substance
    },
    directives: {
      TransferDom
    },
    computed: {
      getSideNav () {
        return this.$store.state.side.sideNav
      }
    },
    watch: {
      getSideNav (val) {
        this.shows = val
      }
    },
    methods: {
      hideSideNav () {
        this.$store.dispatch('showSidenav')
      }
    }
  }

</script>
