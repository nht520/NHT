<template>
    <div class="particulars">
      <!--导航-->
      <Headerone :text="text"></Headerone>
      <!--banner-->
      <sideshow :slides="slidshwo"></sideshow>
      <!--标题  描述-->
      <Tieles :Tielse="Tielse"></Tieles>
      <!--联系方式-->
      <Relation :list="iphonelist"></Relation>
      <!--评价-->
      <Evaluate :items="itemlist"></Evaluate>
      <!--图文-->
      <imgtxt :imgtxt="mtlist"></imgtxt>
      <!--购买按钮-->
      <Purchase></Purchase>

    </div>
</template>
<script>
    import Sideshow from "../components/Sideshow";
    import Headerone from "../components/Headerone";
    import Relation from "../components/Relation/Relation";
    import Evaluate from "../components/Evaluate/Evaluate";
    import Tieles from "../components/Tieles/Tieles";
    import Imgtxt from "../components/imgtxt/Imgtxt";
    import Purchase from "../components/Purchase/Purchase";
    import Sheest from "../components/Sheest/Sheest";
    export default {
      name: "Particulars",
      components: {
        Sheest,
        Purchase,
        Imgtxt,
        Tieles,
        Evaluate,
        Relation,
        Headerone,
        Sideshow
      },
      data() {
        return {
          //标题
          text:'商品详情1',
          //图文描述
          mtlist: [
            {
              src: require('../assets/slideShow/pic1.jpg'),
              title:'123456789',
              text:'123456789'
            },
            {
              src: require('../assets/slideShow/pic1.jpg'),
              title:'456789315645464i',
              text:'fae4889g1a65161a51rg.'
            }
          ],
          //联系方式
          iphonelist:[
            {
              bdbottom:false,
              iphone:'fas fa-angry',
              tel:'惹我生气1',
            },
            {
              bdbottom:false,
              iphone:'mail',
              tel:'联系邮箱',
            },
            {
              iphone:'fas fa-angry',
              tel:'联系地址',
            },
          ],
          itemlist:[
            { header: '用户评论' },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              title: '我是秦始皇',
              subtitle: "<span class='text--primary'>Ali Connors</span> ekend. Do you want to hang out?"
            },
            { divider: true, inset: true },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
              title: '我是武则天',
              subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
            },
          ],
          Tielse:[
            {
              title: '戴维贝拉秋季男女童拉链',
              marsha: '优质特惠 千万妈妈品质之选\n' + '单件包邮 赠送运费险 畅享无忧购物\n' + '商场同款 更多惊喜请进入店铺首页',
            }
          ],
          //轮播
          slidshwo: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
              patchc: '/zujianmn'
            },
            {
              src:  require('../assets/slideShow/pic2.jpg'),
              patchc:'/Sideshow'
            },
            {
              src: require('../assets/slideShow/pic3.jpg'),
              patchc: '/zujianmn'
            },
            {
              src: require('../assets/slideShow/pic4.jpg'),
              patchc: '/zujianmn'
            }
          ],
        }
      },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixin";
  .v-list--two-line .v-list__tile
    height: 50px;
</style>
