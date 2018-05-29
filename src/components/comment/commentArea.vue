<template>
  <div>
    <group>
      <x-textarea v-model="value" placeholder="给他评论～" :disabled="!isType"></x-textarea>
    </group>
    <!--<button @click="saveComment">发送评论</button>-->
    <div class="submit">
      <x-button type="primary" mini :show-loading="false" @click.native="saveComment">发送评论</x-button>
    </div>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .submit
    text-align right
    margin $padding
</style>
<script>
  import ajax from '@/api/document.js'
  import { Group,XTextarea } from 'vux'
  export default {
    components: {
      XTextarea,
      Group
    },
    data(){
      return {
        value:''
      }
    },
    props:['isType'],
    methods:{
      saveComment(){
        ajax.saveComments(encodeURIComponent(this.value)).then(res=>{
          console.log(res)
        });
        this.$emit('nes',this.value)
      }
    }
  }

</script>
