<template>
  <div class="my-comment">
    <flexbox orient="vertical" :gutter="0" class="commentCont">
      <flexbox-item class="my-cont">评论点什么好</flexbox-item>
      <flexbox-item class="comment-article">
        <img src="" alt="" width="50" height="50">
        <div>
          <p class="username">作者：张倩倩</p>
          <p class="twoline">知道了这些知道了这些知道了这些知道了道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些</p>
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox orient="vertical" :gutter="0" class="commentCont">
      <flexbox-item class="my-cont">评论点什么好</flexbox-item>
      <flexbox-item class="comment-article">
        <img src="" alt="" width="50" height="50">
        <div>
          <p class="username">作者：张倩倩</p>
          <p class="twoline">知道了这些知道了这些知道了这些知道了道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些</p>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .my-comment
    padding $padding
  .commentCont
    margin $botGutter14
    .my-cont
      font-size $navfont
      margin-bottom 6px
  .comment-article
    overflow hidden
    background #efefef
    img
      float left
      margin-right 10px
      background #000
    div
      height 50px
      font-size $basefont
      display: table-cell;
      vertical-align:middle;
    .username
      color #000
      margin-bottom 4px
    .twoline
        twoline()
</style>
<script>
  import FlexboxItem from '../../../node_modules/vux/src/components/flexbox/flexbox-item.vue'

  export default {
    components: {FlexboxItem},
    data () {
      return {

      }
    }
  }

</script>
