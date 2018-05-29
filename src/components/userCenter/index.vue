<template>
  <div>
    <flexbox class="users">
      <flexbox-item>
        <img :src="user" alt="" width="50" height="50">
        <div class="fl">
          <span>张三三</span>
          <span>18210***1111</span>
        </div>
      </flexbox-item>
    </flexbox>
    <group class="my-item">
      <cell-box is-link link="/mycomment">
        我的评论
      </cell-box>
      <cell-box is-link link="/myenrolls">
        我的报名
      </cell-box>
      <cell-box is-link link="/myarticle">我的文章</cell-box>
      <cell-box is-link link="/mymessage">我的消息
        <span class="mesg-tip" :class="[mesgmun>99 ? 'mesg-multinum' : 'mesg-num']">{{mesgmun}}</span>
      </cell-box>
    </group>
    <x-button class="loginout" mini type="primary">退出登陆</x-button>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .users
    img
      float: left;
      margin-right 14px
      border-radius 50%
    div
      float left;
      span
        display block
        font-size $navfont
        line-height 1.4
      span:first-child
        margin-bottom 10px
  .my-item
    font-size:$navfont
  .mesg-tip
    display: inline-block
    text-align: center
    background: #f74c31
    color: #fff
    font-size: 12px
    height: 16px
    line-height: 16px
    margin-right 15px
    background-clip: padding-box
    vertical-align: middle
  .mesg-num
    border-radius: 8px
    width 16px
  .mesg-multinum
    border-radius: 8px
    padding: 0 6px
    background-clip: padding-box
    vertical-align: middle
  .loginout
    margin-top:50px
</style>
<script>
  import { Group, Cell, CellBox,Badge } from 'vux'
  export default {
    data () {
      return {
        user:'',
        mesgmun:0
      }
    },
    components: {
      Group,
      Cell,
      CellBox,
      Badge
    },
    computed:{
      getMesgnums(){
        return this.$store.state.side.mesgmun;
      }
    },
    methods:{
      getMesgnum(){
        this.mesgmun = this.$store.state.side.mesgmun;
      }
    },
    watch:{
      getMesgnums(val){
        this.mesgmun=val
      }
    },
    created(){
      this.getMesgnum()
    }
  }

</script>
