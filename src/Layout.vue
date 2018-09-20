<template>
  <div id="Layout">
    <!--头部-->
    <!--<div class="header">-->
      <!--<Header></Header>-->
    <!--</div>-->
    <!--内容-->
    <div class="content">
      <transition name="bounce"  mode="out-in">
        <keep-alive>
          <router-view class="child-view">
          </router-view>
        </keep-alive>
      </transition>
    </div>
  <!--bottom-->
    <div class="Bottom">
      <v-card>
        <v-bottom-nav
          :active.sync="bottomNav"
          :color="color"
          :value="true"
          absolute
          shift >
          <ul>
            <router-link  v-for="(item,index) in bottom"  :to="item.path"  :key="index" tag="li">
              <v-btn dark>
                <span>{{item.title}}</span>
                <v-icon>{{item.Icon}}</v-icon>
              </v-btn>
            </router-link>
          </ul>
        </v-bottom-nav>
      </v-card>
    </div>
    <!---->


  </div>
</template>
<script>
// import Bottom from "./components/Bottom";
export default {
  name: 'Layout',
  components: {
    // Bottom
  },
  data () {
    return {
      bottomNav: 0,
      bottom:[
        {
          title:'首页',
          Icon:'ondemand_video',
          path:'/',
          active: false
        },
        {
          title:'分类',
          Icon:'music_note',
          path:'/List',
          active: false
        },
        {
          title:'购物袋',
          Icon:'place',
          path:'/shopping',
          active: false
        },
        {
          title:'个人',
          Icon:'favorite',
          path:'/About',
          active: false
        },
      ],
    }
  },
  computed: {
    color () {
      switch (this.bottomNav) {
        case 0: return 'red'
        case 1: return 'purple'
        case 2: return 'cyan'
        case 3: return 'orange'
      }
    },

  },

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin";
  #Layout //布局界面
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
  .Bottom //底部样式
    color #ffffff
    position fixed
    width 100%
    bottom 0px
    & ul //底部ul演示
      width 100%
      padding 0px
    & ul li //底部li样式
      float left
      width 25%

  /*仿微信切换效果*/
 /* .bounce-leave-active
    opacity: 0
      -webkit-transform: translate(50px, 0)
    transform: translate(50px, 0)
  .bounce-enter, .bounce-leave-to
    opacity: 0
      -webkit-transform: translate(-50px, 0)
    transform: translate(-50px, 0)*/
  .bounce-enter-active //切换动画效果
    transition all .4s ease
  .bounce-leave-active
    transition all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .bounce-enter, .bounce-leave-to
    transform translateX(10px)
    opacity 0

  /*.bounce-enter-active
    animation: bounce-in 1s
  .bounce-leave-active
    animation: bounce-in .5s reverse
  @keyframes bounce-in
    0%
      transform: scale(0)
    50%
      transform: scale(1)
    100%
      transform: scale(0.5)*/


</style>
