<template>
 <div>
   <ul>
     <li><span>报名起止时间：</span>{{eventInfo.enroll_start_time}}至{{eventInfo.enroll_end_time}}</li>
     <li><span>报名人数：</span>20/{{eventInfo.limit_number}}</li>
     <li><span>报名费用：</span>{{eventInfo.fee}}元</li>
   </ul>
   <div class="submit">
     <x-button type="primary" mini @click.native="enrolls(eventInfo.id)">报名</x-button>
   </div>
 </div>

</template>
<style lang="stylus">

</style>
<script>
  import ajax from '@/api/enrolls.js'
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {}
    },
    props:['eventInfo'],
    methods:{
      enrolls (id) {
        this.fetchTooken()
//        ajax.saveEnrolls(id).then(res => {
//          console.log('success')
//        })
      },
      ...mapActions([
          'fetchTooken',
          'setTooken',
          'delTooken'
      ])
    }

  }

</script>
