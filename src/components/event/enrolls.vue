<template>
  <flexbox class="enroll-user" :gutter="0" wrap="wrap">
    <flexbox-item v-for="item in enrollsList" :span="1/4">
      <img :src="item.user.avatar" alt="" width="50" height="50">
      <p>{{item.user.display_name}}</p>
    </flexbox-item>
  </flexbox>
</template>
<style lang="stylus">
  .enroll-user
    text-align center
    img
      border-radius 50%
      margin-bottom 5px
    p
      font-size $navfont
      margin-bottom 10px
</style>
<script>
  import ajax from '@/api/enrolls.js'
  export default {
    data () {
        return {
          enrollsList:[]
        }
    },
    methods:{
      _fetchEnrolls(){
        ajax.fetchEnrolls(1).then(res => {
          this.$set(this.$data,'enrollsList',res.data.data)
        })
      }
    },
    created(){
      this._fetchEnrolls()
    }
  }

</script>
