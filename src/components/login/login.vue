<template>
  <div class="login">
    <flexbox class="login-logo">
      <flexbox-item>
        <img src="" alt="this is a logo." width="140" height="50">
      </flexbox-item>
    </flexbox>
    <flexbox class="login-type">
      <flexbox-item class="type-login" @click.native="curIndex=0" :class="[curIndex==0 ? 'current' : '']">快捷登录</flexbox-item>
      <flexbox-item class="type-login" @click.native="curIndex=1" :class="[curIndex==0 ? '' : 'current']">密码登录</flexbox-item>
    </flexbox>
    <group v-if="curIndex==0">
      <x-input title="账号：" mask="999 9999 9999" v-model="mobile" :max="13" is-type="china-mobile" placeholder="手机号" class="username"></x-input>
      <x-input title="验证码：" class="weui-vcode"><x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
      <x-button type="primary" class="loginbtn">登录</x-button>
    </group>
    <group v-else>
      <x-input title="账号：" mask="999 9999 9999" v-model="mobile" :max="13" is-type="china-mobile" placeholder="手机号" class="username"></x-input>
      <x-input title="密码："  v-model="password" :min="6" :max="32"  type="password" placeholder="密码" is-type="testPassword"></x-input>
      <x-button type="primary" class="loginbtn" @click.native="userlogin">登录</x-button>
    </group>
    <flexbox class="fastlogin">
      <flexbox-item>微信登陆</flexbox-item><flexbox-item v-show="curIndex!=0" span="80">忘记密码？</flexbox-item>
    </flexbox>
    <x-button  class="register" mini link="/register">注册</x-button>
  </div>
</template>
<style lang="stylus" scoped>
  @import "~common/stylus/reset.styl"
  .login
    padding $padding
  .login-logo
    margin 20px 0
    img
      display block
  .loginbtn
    margin-top 20px
  .fastlogin
    font-size $basefont
    margin $topGutter
    text-align right !important
  .register
    position fixed !important
    bottom 20px
    left 50%
    transform translateX(-50%)
  .login-type
    .type-login
      line-height 1.5
      padding $botGutter
      text-align center
    .current
      color $link
      border-bottom 1px solid $link
  .weui-cells
    margin-top 0 !important
</style>
<script>
  import ajax from '@/api/login.js'
  import tool from '../../utills/tool.js'
  import tip from '../../utills/tip.js'
  import cookie from '../../utills/cookie.js'
  export default {
    data () {
      return {
        mobile:'',
        password:'',
        testcode:'',
        curIndex:0
      }
    },
    methods:{
      userlogin(){
        if(this.mobile && this.password){
          this.mobile=tool.trimBlank(this.mobile)
          ajax.userlogin(this.mobile,this.password).then((res)=>{
            cookie.setTooken(res.data.access_token);
            this.$store.dispatch('changeLoginStatus');
            this.$router.push({path: '/'})
          }).catch((error)=>{
            tip.alertTip('验证码获取失败',tool.catchErrTip(error.response.data.message));
          })
        }else{
          tip.alertTip('登陆失败','账号/密码错误');
        }
      }
    }
  }

</script>
