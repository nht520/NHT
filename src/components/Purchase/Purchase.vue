<template>
    <div class="Purchase">
      <v-container grid-list-md text-xs-center style="padding: 0px">

        <v-layout row wrap>

          <!--<v-flex v-for="item in purchase" :key="item.id" xs3 v-model="show" color="cyan" left>-->
              <!--<span slot="badge">6</span>-->
              <!--<v-icon>{{item.icon}}</v-icon>-->
              <!--<v-card-text class="px-0">{{item.text}}</v-card-text>-->
          <!--</v-flex>-->
          <v-flex>
            <router-link to="/Carret">
              <v-icon>fas fa-atom</v-icon>
              <v-card-text class="px-0">商家</v-card-text>
            </router-link>
          </v-flex>
          <v-flex>
            <v-icon>far fa-heart</v-icon>
            <v-card-text class="px-0">收藏</v-card-text>
          </v-flex>
          <v-flex @click="show = !show">
            <v-badge
              v-model="show"
              color="red"
              left
            >
              <span slot="badge">1</span>
              <v-icon>fab fa-asymmetrik</v-icon>
              <v-card-text class="px-0">加入购物车</v-card-text>
            </v-badge>
          </v-flex>
          <v-flex>
            <v-icon>fas fa-angry</v-icon>
            <v-card-text class="px-0">立即购买</v-card-text>
          </v-flex>

        </v-layout>

      </v-container>
    </div>
</template>
<script>
    export default {
      name: "Purchase",
      data() {
          return {
            show: false,

            // purchase:[
            //   {
            //     icon:'far fa-heart',
            //     text:'收藏'
            //   },
            //   {
            //     icon:'fas fa-atom',
            //     text:'联系'
            //   },
            //   {
            //     icon:'fab fa-asymmetrik',
            //     text:'加入购物车'
            //   },
            //   {
            //     icon:'fas fa-angry',
            //     text:'立即购买'
            //   },
            // ]
            //
          }
      },
      computed: {

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
  .Purchase
    color #000000
    position fixed
    width 100%
    bottom 0px
    background #ffffff
    height 56px
    border-top 1px solid #ebebeb
    & .v-card__text
      padding 5px 16px 16px 16px
    .flex,.v-icon
      margin-top 1%
    .flex:nth-child(3)
      background #ffb318
    .flex:last-child
      background #f44336
    .flex:nth-child(3) .px-0,.flex:last-child .px-0
      /*background #f44336*/
      color #ffffff
    .flex:nth-child(3) .v-icon,.flex:last-child .v-icon
      /*background #f44336*/
      color #ffffff



</style>
