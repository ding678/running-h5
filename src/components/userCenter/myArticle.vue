<template>
  <div class="articles">
    <flexbox class="article-item">
      <flexbox-item class="article-pic">
        <img scr="" alt="" width="60" height="60">
      </flexbox-item>
      <flexbox-item class="article-info">
        <h6>标题</h6>
        <p class="desc">渐渐</p>
        <p class="tags"><span class="tag">标签 </span></p>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .articles
    padding-left:10px
    margin-bottom 50px
  .article-item
    padding $alignGutter
    border-bot()
  .article-item:last-child
    border-bottom none
  .article-pic
    flex 0 !important
    flex-basis  60px !important
  .article-info
    text-align left
    align-items top
    h6
      font-size $midfont
      margin-bottom 4px
    .desc
      color $desc
      font-size $navfont
      margin-bottom 4px
    .tags
      overflow hidden
      span
        tag()
        fl()
</style>
<script>
  export default {
    data () {
      return {}
    }
  }

</script>
