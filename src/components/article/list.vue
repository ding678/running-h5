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
    <div  v-for="item in articles"  class="article-item">
      <router-link :to="'/articles/'+item.id" >
        <flexbox class="article-item">
          <flexbox-item  v-show="item.cover_id" class="article-pic">
            <img :src="item.cover_id" alt="" width="60" height="60">
          </flexbox-item>
          <flexbox-item class="article-info">
            <h6>{{item.title}}</h6>
            <p class="desc">{{item.description}}</p>
            <p class="tags"><span v-for="tag in item.tags" class="tag">{{tag.name}}</span></p>
          </flexbox-item>
        </flexbox>
      </router-link>
    </div>
    <loading></loading>
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
  import ajax from '@/api/document.js'
  export default {
    data () {
      return {
        articles: []
      }
    },
    created () {
      this.getArticles();
      this.showLoading();
    },
    methods: {
      getArticles () {
        ajax.fetchList(1).then(res => {
          this.articles = res.data.data;
          this.$vux.loading.hide()
        })
      },
      showLoading(){
        this.$vux.loading.show({
          text: 'Loading'
        })
      }
    }
  }

</script>
