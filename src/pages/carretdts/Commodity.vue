<template>
  <div class="Commodity">
    <div class="left">
      <ul>
        <router-link v-for="(item,index) in left" tag="li" :to="item.patch" active-class="active" :key="index">{{item.text}}</router-link>
      </ul>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
export default {
    name: "Commodity",
    data() {
        return{
            left:[
              {
                text:'我是炒菜1',
                patch:'/header'
              },{
                text:'我是主菜2',
                patch:'/Sideshow'
              },{
                text:'我是烧烤3',
                patch:"/Sideshow"
              },
              {
                text:'我是炒菜4',
                patch:'/header'
              },{
                text:'我是主菜5',
                patch:'/Sideshow'
              },{
                text:'我是烧烤6',
                patch:"/Sideshow"
              },{
                text:'我是烧烤3',
                patch:"/Sideshow"
              },
                {
                  text:'我是炒菜4',
                  patch:'/header'
                },{
                text:'我是主菜5',
                patch:'/Sideshow'
              },{
                text:'我是烧烤6',
                patch:"/Sideshow"
              }
            ]

        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
  .left
    -webkit-box-flex 0
    -ms-flex 0 0 80px
    flex 0 0 80px
    width 80px
    background #f3f5f7
    text-align center
    overflow-x hidden
    overflow-y scroll
    text-align center
  .left::-webkit-scrollbar
    display: none
  .left ul
      width 100%
      padding 0px
      & li
         width 100%
         float left
         height 50px
         line-height 50px
      & li.active
         color #f00
  .right
    float left
    width 70%

</style>
