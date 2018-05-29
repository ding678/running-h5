<template>
  <div class="article-detail">
    <div class="articleDatail-info">
      <h2>{{document.title}}</h2>
      <aside>
        <span>作者：{{document.user.username}}</span>
        <span>时间：{{document.created_at}}</span>
        <span>浏览量：{{document.view_total}}</span>
        <span>评论：{{document.comment_total}}</span>
      </aside>
      <article>{{document.article.content}}</article>
      <p class="tags"><span v-for="tag in document.tags" class="tag">{{tag.name}}</span></p>
      <!--<article>{{articleDetail.article.parse}}</article>-->
      <!--<div class="article-more">-->
      <!--<address>上一篇：123</address>-->
      <!--<address>下一篇：678</address>-->
      <!--</div>-->
    </div>
    <div class="article-comment">
      <!--<group>-->
      <!--<x-textarea v-model="value" placeholder="给他评论～" :disabled="articleDetail.allow_comment"></x-textarea>-->
      <!--</group>-->
      <commentArea :isType="document.allow_comment" v-on:nes="getNewComment"></commentArea>
      <commentList :showComments="comments"></commentList>
      <router-view></router-view>
    </div>

  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .article-detail
    h2
      font-size 18px
      margin-bottom 10px
    aside
      overflow hidden
      font-size $navfont
      margin-bottom 10px
      span
        fl()
        margin-right 4px
        color $desc
    article
      line-height 1.5
      color $article
      font-size $navfont
      text-align left
      text-indent 2em

  .articleDatail-info
    padding $padGutter
    .tags
      overflow hidden
      margin $topGutter
      span
        tag()
        fl()
  .article-more
    margin-top: 20px
    address
      line-height 2
      font-size $navfont
      color $desc
      text-align left
      ellipse()


</style>
<script>
  import axios from 'axios'
  import { Group, XTextarea } from 'vux'
  import commentList from '../comment/commentList.vue'
  import commentArea from '../comment/commentArea.vue'
  import ajax from '@/api/document.js'

  export default {
    components: {
      commentArea,
      commentList
    },
    data () {
      return {
        document: {
          article: {},
          user: {},
          tag: []
        },
        comments: []
      }
    },
    methods: {
      getArticleDetail () {
        ajax.fetchDetail(this.$route.params.id).then(res=>{
          this.$set(this.$data, 'document', res.data.data)
        })
      },
      getComments () {
        ajax.fetchComments(1).then(res=>{
          this.$set(this.$data, 'comments', res.data.data)
        })
      },
      getNewComment(res){
          console.log(res)
      }
    },
    created () {
      this.getArticleDetail()
      this.getComments()
    }
  }

</script>
