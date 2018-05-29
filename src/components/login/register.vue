<template>
  <div class="register">
    <flexbox class="login-logo">
      <flexbox-item>
        <img src="" alt="this is a logo." width="140" height="50">
      </flexbox-item>
    </flexbox>
    <group class="register-item">
      <x-input title="账号：" mask="999 9999 9999" v-model="mobile" :max="13" is-type="china-mobile" placeholder="手机号"
               class="username" ref="mobile"></x-input>
      <x-input title="验证码：" class="weui-vcode" v-model="testCode">
        <x-button slot="right" :type="btnType" mini @click.native="sendCode" ref="testCode" :text="btnText"
                  :disabled="isclick"></x-button>
      </x-input>
      <x-input title="输入密码：" v-model="password" :min="6" :max="32" type="password" placeholder="输入密码"
               ref="enterPassword"></x-input>
      <x-input title="确认密码：" v-model="confirmPassword" :min="6" :max="32" type="password" placeholder="确认密码"
               @on-focus="confirm" @on-blur="checkPassword" ref="checkPassword"></x-input>
      <x-button type="primary" class="registerbtn" @click.native="register">注册</x-button>
    </group>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .register
    padding $padding

  .login-logo
    margin 20px 0
    img
      display block

  .register-item
    font-size $navfont
</style>
<script>
  import ajax from '@/api/register.js'
  import tool from '../../utills/tool.js'
  import tip from '../../utills/tip.js'
  import { AlertModule } from 'vux'

  export default {
    data () {
      return {
        mobile: '',
        confirmPassword: '',
        password: '',
        testCode: '',
        btnText: '发送验证码',
        btnType: 'primary',
        isclick: false,
      }
    },
    methods: {
      register () {
        this.mobile = tool.trimBlank(this.mobile)
        console.log(this.mobile, this.testCode, this.password, this.confirmPassword)
        if (this.mobile && this.testCode && this.password && this.confirmPassword) {
          ajax.register(this.mobile, this.password, this.confirmPassword, this.testCode).then((res) => {
            tip.alertTip('注册成功，请重新登陆');
            this.$router.push({path: '/'})
          }).catch((error) => {
            tip.alertTip('注册失败',tool.catchErrTip(error.response.data.message))
          })
        } else {
          tip.alertTip('请填写完整')
        }
      },
      confirm () {
        if (!this.password) {
          this.$refs.enterPassword.focus()
        }
      },
      checkPassword () {
        if (this.confirmPassword !== this.password) {
          tip.alertTip('密码不一致，请重新输入');
          this.$refs.enterPassword.reset()
          this.$refs.checkPassword.reset()
        }
      },
      sendCode () {
        if (this.moblie) {
          this.btnText = '60s'
          this.btnType = 'default'
          this.isClick = true
          this.mobile = tool.trimBlank(this.mobile)
          ajax.registerVerify(this.mobile, this.password, this.confirmPassword).then((res) => {
            console.log(res.data)
          }).catch((error) => {
            tip.alertTip('验证码获取失败',tool.catchErrTip(error.response.data.message));
          })
          var n = 60
          var timer = setInterval(() => {
            n--
            if (n == 0) {
              this.btnText = '发送验证码'
              this.btnType = 'primary'
              this.isClick == false
              clearInterval(timer)
              return
            }
            this.btnText = n + 's'
          }, 1000)
        } else {
          this.$refs.moblie.focus()
        }
      }
    }
  }

</script>
