<template>
  <div class="event-info">
    <div class="infos">
      <h2>{{eventDetail.title}}</h2>
      <ul>
        <li><span>活动时间：</span>{{eventDetail.activity_start_time}}至{{eventDetail.activity_end_time}}</li>
        <li><span>活动地点：</span{{eventDetail.address}}></li>
        <li><span>活动简介：</span>{{eventDetail.description}}</li>
      </ul>
      <ul v-show="!bFlag">
        <li><span>报名起止时间：</span>2018-09-09至2018-09-09</li>
        <li><span>报名人数：</span>20/100</li>
        <li><span>报名费用：</span>30元</li>
      </ul>
    </div>
    <div class="enrolls infos" v-show="!bFlag">
      <div class="event-enrolls">
        <span v-for="(item,index) in child" @click="tabEvent(item,index)"
              :class="{'current':index == curIndex}">{{item.title}}</span>
      </div>
      <eventInfo :eventInfo="eventInfo"></eventInfo>
      <div>
        <router-link to="/enrolls">查看报名人员>></router-link>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/reset.styl"
  .event-info
    padding $padGutter
  .infos
    ul
      margin $topGutter
    li
      font-size $navfont
      line-height 1.4
      text-align left
      span
        color $desc

  .event-enrolls
    margin $alignGutter
    overflow hidden
    border-bottom 1px solid $article
    height 28px
    span
      float left
      height 28px
      line-height 28px
      padding: 0 16px
      border 1px solid $article
      border-bottom: none
      border-radius 4px 4px 0 0
      margin-right 4px

    .current
      background $link
      color #fff

  .submit
    text-align right
    margin $padding

</style>
<script>
  import ajax from '@/api/enrolls.js'
  import eventInfo from './component/eventInfo.vue'

  export default {
    data () {
      return {
        eventDetail: {},
        eventInfo: {},
        bFlag: false,
        curIndex: 0,
        child: [
          {
            title: 'Suscipit ',
            description: 'Modi est quaerat error ut eligendi in perspiciatis.',
            content: 'Maxime voluptatem et vel id sunt nobis sed. Occaecati tenetur tempore rem at est. Hic tenetur deserunt fuga deserunt et et architecto. Cupiditate quod libero facere earum molestias fuga. Dignissimos sapiente officiis placeat praesentium et. Sit consequatur odit distinctio ut. Aperiam harum rerum voluptatem vitae tenetur quo. Illum ea natus facilis aliquam qui. Impedit cupiditate ea ut. Accusantium magnam est placeat. Exercitationem aut neque unde deserunt nobis. Et exercitationem eaque iusto soluta praesentium autem. Nobis sed dolor eos dolor voluptatem omnis veniam. Quod asperiores culpa corrupti illum velit omnis architecto. Ducimus rem quaerat atque id inventore perferendis.',
            address: '南京上街区',
            activity_start_time: '1986-10-18 00:08',
            activity_end_time: '2005-12-07 00:18',
            enroll_start_time: '2018-05-05 01:41',
            enroll_end_time: '1982-03-06 00:08',
            limit_number: 111,
            users_count: 5,
            fee: 0
          },
          {
            title: 'nobis.',
            description: 'Modi est quaerat error ut eligendi in perspiciatis.',
            content: 'Maxime voluptatem et vel id sunt nobis sed. Occaecati tenetur tempore rem at est. Hic tenetur deserunt fuga deserunt et et architecto. Cupiditate quod libero facere earum molestias fuga. Dignissimos sapiente officiis placeat praesentium et. Sit consequatur odit distinctio ut. Aperiam harum rerum voluptatem vitae tenetur quo. Illum ea natus facilis aliquam qui. Impedit cupiditate ea ut. Accusantium magnam est placeat. Exercitationem aut neque unde deserunt nobis. Et exercitationem eaque iusto soluta praesentium autem. Nobis sed dolor eos dolor voluptatem omnis veniam. Quod asperiores culpa corrupti illum velit omnis architecto. Ducimus rem quaerat atque id inventore perferendis.',
            address: '南京上街区',
            activity_start_time: '1986-10-18 00:08',
            activity_end_time: '2005-12-07 00:18',
            enroll_start_time: '2018-05-05 01:41',
            enroll_end_time: '1982-03-06 00:08',
            limit_number: 111,
            users_count: 5,
            fee: 180,
          }
        ]
      }
    },
    components: {
      eventInfo
    },
    methods: {
      fetchDetail () {
        ajax.fetchDetail(this.$route.params.id).then(res => {
          this.$set(this.$data, 'eventDetail', res.data.data);
          if(res.data.data.child.length == 0){
            this.bFlag=false;
            this.eventInfo=this.child[0];
          }else{
            this.bFlag=true;
            this.$set(this.$data,'eventInfo',res.data.data.child[0]);
          }
        })
      },
      tabEvent (item, index) {
        this.eventInfo = item
        this.curIndex = index
      },

    },
    created () {
      this.fetchDetail()
    }
  }

</script>
