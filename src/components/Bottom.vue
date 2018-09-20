<template>
  <div>
    <!--子路由显示部分-->
    <div class="dibbomo">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>
    <div class="Bottom">
      <v-card>
        <v-bottom-nav
          :active.sync="bottomNav"
          :color="color"
          :value="true"
          absolute
          shift >
          <ul>
            <router-link :to="item.path" v-for="item in bottom"  :key="item.id" tag="li">
              <v-btn dark>
                <span>{{item.title}}</span>
                <v-icon>{{item.Icon}}</v-icon>
              </v-btn>
            </router-link>
          </ul>
        </v-bottom-nav>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
    name:'Bottom',
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
        case 0: return 'cyan'
        case 1: return 'purple'
        case 2: return 'red'
        case 3: return 'orange'
      }
    }
  },
   methods:{

   }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixin";
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
</style>
