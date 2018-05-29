<template>
  <div class="event">
      <flexbox orient="vertical">
        <flexbox-item   class="eventbg">
          <div class="info">
            <p>东小口&nbsp;&nbsp;|&nbsp;&nbsp;{</p>
            <p>22/&nbsp;&nbsp;|&nbsp;&nbsp;¥</p>
          </div>
        </flexbox-item>
      </flexbox>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .event
    .eventbg
      width 100%
      height 130px
      background url("../../common/image/pic-1.jpg")  no-repeat
      position relative
      .info
        position absolute
        bottom 0
        left 0
        width calc(100% - 20px)
        background rgba(0,0,0,0.5)
        padding $padding
        font-size $navfont
        color $white
        p:last-child
          margin $topGutter
</style>
<script>
  export default {
    data () {
      return{

      }
    }
  }

</script>
