<template>
  <div>
    <group class="navlist">
      <cell-box is-link class="user" link="/user" v-show="isLogin">
        <img src="../../../common/image/logo.jpg">
        <span class="mesg-tip" :class="[mesgmun>99 ? 'mesg-multinum' : 'mesg-num']">{{mesgmun}}</span>
      </cell-box>
      <cell-box is-link class="user" link="/login" v-show="!isLogin">
        <img src="">
        <span class="margin-r">登陆/注册</span>
      </cell-box>
      <cell-box is-link link="/">
        首页{{getTooken}}
      </cell-box>
      <cell-box is-link>
        文章列表
      </cell-box>
      <cell-box is-link link="/event">赛事信息</cell-box>
      <!--<cell-box is-link>我的通知 <i class="num">{{mesgmun}}</i></cell-box>-->
    </group>
  </div>

</template>
<style lang="stylus" scoped>
  .navlist
    font-size $navfont
    .weui-cells
      margin-top: 0px
    .vux-no-group-title
      margin-top: 0px
  .user
    justify-content space-between
    .margin-r
      margin-right 14px
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
  img
    width:50px
    height:50px
    border-radius:50%
    fl()
  .num
    float right
    width 16px
    height 16px
    background red
    color #fff
    text-align center
    line-height 16px
    border-radius 50%
    font-size 10px
</style>
<script>
  import { Group, Cell, CellBox,Badge } from 'vux'
  export default {
    components: {
      Group,
      Cell,
      CellBox,
      Badge
    },
    data(){
      return{
        userPic:'../../../common/image/logo.jpg',
        mesgmun:22,
        isLogin:false
      }
    },
    computed:{
      getTooken(){
        return this.$store.state.loginStatus.isLogin
      }
    },
    watch:{
      getTooken(val){
        this.isLogin=val;
      }
    }
  }

</script>
