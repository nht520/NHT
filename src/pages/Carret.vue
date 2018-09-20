<template>
  <div class="Carret">
    <Headerone  :text="text"></Headerone>
    <!--头部-->
    <div style="height: 46px"></div>
    <div class="Header">
      <Carretdts></Carretdts>
    </div>
    <!--内容-->
    <div class="tab border-1px">
      <ul class="carrtiv">
        <router-link :to="item.path" v-for="(item,index) in cattbes" tag="li" :key="index" active-class="active">{{item.text}}</router-link>
      </ul>
      <div class="coldest">
        <transition  name="carets" mode="out-in">
          <keep-alive>
            <router-view ></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
    import Carretdts from "../components/Carretdts/Carretdts";
    import Headerone from "../components/Headerone";
    export default {
      name: "Carret",
      components: {
        Headerone,
        Carretdts
      },
      data () {
        return {
          text:'商家详情',
          cattbes:[
            {
              path:'/Carret/Commodity',
              text:'商品'
            },
            {
              path:'/Carret/Comment',
              text:'评价'
            },
            {
              path:'/Carret/Merchant',
              text:'商家'
            }
          ],
        }
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixin";

  .v-tabs__container--icons-and-text //table切换高度
    height 40px
  .v-tabs__div a
    color #ffffff
  .tab ul
    width 100%
    background #ffffff
    line-height 35px
    & li
        width 30%
        float left
        margin-left 3%
        color #4d555d
        text-align center
        cursor pointer
    & li.active
         color #f50057
  .Commodity  //菜单显示区域
    display -webkit-box
    display -ms-flexbox
    display flex
    position absolute
    top 193px
    bottom 46px
    width 100%
    overflow hidden
  .carets-enter-active //页面切换动画效果
   transition all .4s ease
  .carets-leave-active
    transition all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .carets-enter, .carets-leave-to
    transform translateX(10px)
    opacity 0


</style>
