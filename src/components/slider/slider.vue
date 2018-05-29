<template>
  <div>
    <swiper :list="demolist" :show-dots="true"  loop :interval="2000"></swiper>
    <!--<img src="./static/pic-1.jpg" alt="">-->
  </div>
</template>
<style>

</style>
<script>
  import { Swiper } from 'vux'
  export default {
    components:{
      Swiper
    },
    data(){
      return{
        demolist:[{
          url: 'javascript:',
          img: '/static/pic-1.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: '/static/pic-2.jpg',
          title: '送你一次旅行',
          fallbackImg: '/static/pic-3.jpg'
        }]
      }
    }
  }

</script>
