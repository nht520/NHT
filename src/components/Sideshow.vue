<template>
  <div id="Sideshow">
    <template>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in slides" :key="item.id">
          <router-link :to="item.patchc">
            <img :src="item.src">
          </router-link>
          <h3>{{item.text}}</h3>
        </el-carousel-item>
      </el-carousel>
    </template>
    <!--请求数据 列表-->
    <ul>
      <li v-for="item in list" :key="item.id">
        <p>{{item.title}}</p>
      </li>
    </ul>
    <!--点击请求数据-->
    <button @click="getData()" style="color:#f00">请求数据</button>

  </div>
</template>
<script>
  import Axios from 'axios';
  export default {
    name: 'Sideshow',
    props: {
      slides: {
        // type:String,
        // default:[],
        default: function () {
          return [
            {
              src: require('../assets/slideShow/pic1.jpg'),
              text: '12345648444444444444',
              patchc: '/Header'
            },
            {
              src: require('../assets/slideShow/pic2.jpg'),
              text: '222222222',
              patchc: '/Header'
            },
            {
              src: require('../assets/slideShow/pic3.jpg'),
              text: '12345648444444444444',
              patchc: '/Header'
            },
            {
              src: require('../assets/slideShow/pic4.jpg'),
              text: '12345648444444444444',
              patchc: '/Header'
            }
          ]
        },
      },
    },
    data() {
      return {
        list: [],
      }
    },
    methods: {
       // getData(){
       //  //response请求数据
       //  this.$http.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1")
       //    .then(res=>{
       //      console.log(res.body);
       //      this.list = res.body.result
       //    },(err) => {
       //      console.log(err);
       //    })
       //  },
      getData(){
      //Axios提交数据
       Axios.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1",)
       .then(res => {
          console.log(res.body);
          this.list = res.body.result
        }).catch(err => {
          console.log(err);
        })
      },
      // getData(){
      //   //提交
      //   var param = new URLSearchParams();
      //   param.append("loginName","18928938912");
      //   param.append("user","admin");
      //   param.password("password","134564789")
      //   //Axios提交数据
      //   Axios.get("http://47.92.77.196:9595/goodsInfo/find",param)
      //     .then( res =>{
      //     console.log(res.data.data);
      //     this.list = res.data.data
      //   }).catch( err =>{
      //     console.log(err);
      //   })
      // },

    },

    mounted(){


    }
    //生命周期函数  就是组件挂载及组件更新组件销毁的时候触法的一系列方法  这些方法就是生命周期函数

    //钩子函数  不同阶段执行不同方法
    // beforeCreate (){
    //   console.log("组件实例化之前执行的函数");
    // },
    // created () {
    //   console.log("组件实例化完毕，但页面还未显示")
    // },
    // beforeMount () {
    //   console.log ('组件挂载前，页面任未显示，但虚拟dom已经配置')
    // },
    // mounted () {
    //   console.log ("组件挂载后，此方法执行后，页面显示")
    // },
    // beforeUpdate () {
    //   console.log ("组件更新前，页面仍未更新，但虚拟dom已经配置")
    // },
    // updated () {
    //   console.log ("组件更新后，此方法执行后，页面展示")
    // },
    // beforeDestroy () {
    //   console.log ("组件销毁前")
    // },
    // destroyed () {
    //   console.log ("组件销毁")
    // }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .el-carousel__container
    height 160px !important
    margin-top 48px
    //.el-carousel
     // z-index: -1
    .el-carousel__item img //图片尺寸大小
      width 100%
      height 100%
    .el-carousel__item h3
      color #ffffff
      font-size 18px
      opacity 0.75
      margin 0
      position absolute
      width 100%
      bottom 0px
      background #00000080
      text-align left
      font-size 12px
      line-height 30px
      padding 0% 3%
  .el-carousel__item:nth-child(2n)
    background-color #99a9bf
  .el-carousel__item:nth-child(2n+1)
    background-color #d3dce6

</style>
