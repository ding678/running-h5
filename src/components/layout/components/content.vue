<template>
  <div>
    <slider>
    </slider>
    <flexbox class="nav">
      <flexbox-item v-for="nav in navList" :key="nav.title">
        <router-link :to="nav.link">
          <div class="nav-icon"></div>
          <div class="nav-title">{{nav.title}}</div>
        </router-link>
      </flexbox-item>
    </flexbox>
    <foot></foot>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .nav
    margin-top: 20px

  .nav-icon
    width 50px
    height 50px
    border-radius 50%
    background #ccc
    margin 0 auto 6px

  .nav-title
    text-align center
    font-size $navfont
</style>
<script>
  import slider from '../../slider/slider.vue'
  import foot from './foot.vue'
  export default {
    components: {
      slider,
      foot
    },
    data () {
      return {
        navList: [
          {icon: '', title: '心得交流', link: 'articles'},
          {icon: '', title: '跑步', link: 'running'},
          {icon: '', title: '赛事信息', link: 'event'},
          {icon: '', title: '教学', link: ''}
        ]
      }
    }
  }
</script>
