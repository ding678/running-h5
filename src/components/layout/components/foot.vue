<template>
  <footer ref="foot" :class="[bFlag ? 'to-fixed' : '']" @click="toFixed">
    <p>网站声明：献县跑团是献县跑步爱好者自发组建的公益运动组织,献县跑团免费开放性注册加入。献县跑团不参与任何经营性商业盈利行为，不收任何会费，其他收费或盈利性跑步组织与献县跑团无关</p>
    <p>© 2017 献县跑团 版权所有 京ICP备14037234号-4</p>
  </footer>
</template>
<style lang="stylus">
  @import '~common/stylus/reset.styl'
  footer
    padding: $padGutter
    margin: $topGutter

  footer p
    color: $desc
    font-size $basefont
    line-height 1.5

  footer p:first-child
    text-align left

  .to-fixed
    position fixed
    bottom: 0
    left 0
</style>
<script>
  export default {
    data () {
      return {
        bFlag: false
      }
    },
    methods: {
      toFixed () {
        var oH = document.documentElement.clientHeight
        var contHeight = document.body.offsetHeight
        var footH = this.$refs.foot.offsetHeight
        if ((contHeight + footH) <= oH) {
          this.bFlag = true
        }
      }
    },
    mounted () {
      this.toFixed()
    }
  }
</script>
