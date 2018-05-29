<template>
  <div class="my-message">
    <flexbox orient="vertical" :gutter="0" class="commentCont">
      <flexbox-item class="my-cont">张三评论了你：点什么好</flexbox-item>
      <flexbox-item class="comment-article">
        <img src="" alt="" width="50" height="50">
        <div>
          <p class="username">作者：张倩倩</p>
          <p class="twoline">知道了这些知道了这些知道了这些知道了道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些</p>
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox orient="vertical" :gutter="0" class="commentCont">
      <flexbox-item class="my-cont">赛事通知：明天有比赛，请做好准备</flexbox-item>
      <flexbox-item class="comment-article">
        <img src="" alt="" width="50" height="50">
        <div>
          <p class="username">作者：张倩倩</p>
          <p class="twoline">知道了这些知道了这些知道了这些知道了道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些知道了这些</p>
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox orient="vertical" :gutter="0" class="commentCont">
      <flexbox-item class="my-cont">系统通知：请升级个人账号</flexbox-item>
    </flexbox>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .my-message
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
  export default {
    data () {
      return {}
    }
  }

</script>
