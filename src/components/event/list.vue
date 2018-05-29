<template>
  <div class="event">
    <!--<flexbox orient="vertical">-->
      <!--<router-link to="/event/1" class="eventbg" tag="div">-->
        <!--<div class="info">-->
          <!--<p>东小口&nbsp;&nbsp;|&nbsp;&nbsp;2018-09-10 13:10</p>-->
          <!--<p>22/100&nbsp;&nbsp;|&nbsp;&nbsp;¥0</p>-->
        <!--</div>-->
      <!--</router-link>-->
      <!--<router-link  tag="flexbox-item"  class="eventbg" v-for="item in eventList" :to="'/event/'+item.id">-->
        <!--<div class="info">-->
          <!--<p>东小口&nbsp;&nbsp;|&nbsp;&nbsp;{{item.activity_start_time}}-{{item.activity_end_time}}</p>-->
          <!--<p>22/{{item.limit_number}}&nbsp;&nbsp;|&nbsp;&nbsp;¥{{item.fee}}</p>-->
        <!--</div>-->
      <!--</router-link>-->
    <!--</flexbox>-->
    <router-link  v-for="item in eventList" :to="'/event/'+item.id">
      <flexbox orient="vertical">
        <flexbox-item   class="eventbg">
          <div class="info">
            <p>东小口&nbsp;&nbsp;|&nbsp;&nbsp;{{item.activity_start_time}}-{{item.activity_end_time}}</p>
            <p>22/{{item.limit_number}}&nbsp;&nbsp;|&nbsp;&nbsp;¥{{item.fee}}</p>
          </div>
        </flexbox-item>
      </flexbox>
    </router-link>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .event
  .eventbg
    width 100%
    height 130px
    background url("../../common/image/pic-1.jpg")  no-repeat
    position relative
    .info
      position absolute
      bottom 0
      left 0
      width calc(100% - 20px)
      background rgba(0,0,0,0.5)
      padding $padding
      font-size $navfont
      color $white
      p:last-child
        margin $topGutter
</style>
<script>
  import ajax from '@/api/enrolls.js'
  import FlexboxItem from '../../../node_modules/vux/src/components/flexbox/flexbox-item.vue'
  export default {
    components: {FlexboxItem},
    data () {
      return {
        eventList:[]
      }
    },
    methods:{
      fetchList(){
        ajax.fetchList().then(res => {
          this.$set(this.$data,'eventList',res.data.data)
        })
      }
    },
    created(){
      this.fetchList()
    }
  }

</script>
