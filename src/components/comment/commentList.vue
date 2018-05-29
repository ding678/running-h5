<template>
  <ul class="artcomment-list">
    <!--<li>-->
      <!--&lt;!&ndash;<div class="comments">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="comment-l">&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../../common/image/logo.jpg" alt="" width="50" height="50">&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="comment-r">&ndash;&gt;-->
          <!--&lt;!&ndash;<p>张三三</p>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>献县跑团是献县跑步爱好者自发组建的公益运动组织,献县跑团免费开放性注册加入。&ndash;&gt;-->
            <!--&lt;!&ndash;献县跑团不参与任何经营性商业盈利行为</p>&ndash;&gt;-->
          <!--&lt;!&ndash;<p class="audit"><span>回复</span> <span>删除</span> <span>05-01 12：30</span></p>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--&lt;!&ndash;<router-link tag="div" class="replay-num" to="/replay">有10条回复>></router-link>&ndash;&gt;-->
      <!--&lt;!&ndash;<ul class="replay">&ndash;&gt;-->
      <!--&lt;!&ndash;<li>&ndash;&gt;-->
      <!--&lt;!&ndash;<p><span>张三三评论：</span>我是最聪明的哈哈哈</p>&ndash;&gt;-->
      <!--&lt;!&ndash;<p class="audit"><span>17：30</span></p>&ndash;&gt;-->
      <!--&lt;!&ndash;</li>&ndash;&gt;-->
      <!--&lt;!&ndash;<li>&ndash;&gt;-->
      <!--&lt;!&ndash;<p><span>张三三回复李三三：</span>我是最聪明的哈哈哈</p>&ndash;&gt;-->
      <!--&lt;!&ndash;<p class="audit"><span>删除</span> <span>17：30</span></p>&ndash;&gt;-->
      <!--&lt;!&ndash;</li>&ndash;&gt;-->
      <!--&lt;!&ndash;</ul>&ndash;&gt;-->
    <!--</li>-->
    <li v-for="(value,index) in showComments">
      <div class="comments">
        <div class="comment-l">
          <!--<img :src="value.user.avatar" alt="" width="50" height="50">-->
        </div>
        <div class="comment-r">
          <p>{{value.user.display_name}}</p>
          <p>{{value.content}}</p>
          <p class="audit"><span>回复</span> <span>删除</span> <span>05-01 12：30</span></p>
        </div>
      </div>
      <div class="replay-num" v-show="value.reply_count">有{{value.reply_count}}条回复>></div>
    </li>
  </ul>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .artcomment-list
    margin $alignGutter
    padding $padGutter
    li
      padding $alignGutter
      border-bot()
    li:last-child
      border-bottom: none
    .comments
      overflow hidden
    .comment-l
      width 50px
      height 50px
      padding-right 10px
      fl()
      img
        border-radius 50%
        margin-bottom 4px
    .comment-r
      p
        margin-bottom: 4px
        overflow hidden
        font-size $navfont
        color $desc
        line-height 1.2
        text-align left

  .audit
    text-align right !important
    span
      margin-left 10px
      font-size $navfont
      color: $link
    span:last-child
      color $article

  .replay-num
    margin-left 60px
    font-size $navfont
    color $link
    text-align left
</style>
<script>
  export default {
    props: ['showComments'],
    methods: {
      getComment () {
        this.loading = this.showComments

      }
    }, created () {
      this.getComment()

    }

  }

</script>
