<template>
  <flexbox class="topbar">
    <flexbox-item class="iconfont icon-fanhui back-btn" span="50" v-show="backbtn" @click.native="back">返回</flexbox-item>
    <flexbox-item class="page-name">{{pageName}}</flexbox-item>
    <flexbox-item class="iconfont icon-ai238" span="30" @click.native="showSidenav"></flexbox-item>
  </flexbox>
</template>
<style lang="stylus">
  @import '../../../common/font/iconfont.css'
  @import "~common/stylus/reset.styl"
  .topbar
    padding: 10px 5px
    box-sizing border-box
    .back-btn
      font-size $basefont
  .page-name
    text-align center
</style>
<script>
  export default {
    data(){
      return {
        pageName:''
      }
    },
    methods: {
      showSidenav () {
        this.$store.dispatch('showSidenav')
      },
      back(){
          this.$router.go(-1);
          this.hideBack();
      },
      hideBack(){
        if(this.$route.path=='/'){
          this.backbtn=false;
        }else{
          this.backbtn=true;
        }
      },
      getPageTitle(){
        this.pageName=this.$route.name
      }
    },
    computed:{
      getBackStatus(){
        return this.$store.state.side.backbtn
      }
    },
    watch:{
      getBackStatus(val){
        this.backbtn=val;
      }
    },
    created(){
      this.hideBack();
      this.getPageTitle()
    },
    data(){
      return {
        backbtn:true
      }
    }
  }

</script>
