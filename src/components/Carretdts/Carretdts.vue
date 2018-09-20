<template>
 <div id="Carretdts">
     <!--头部背景图-->
     <div class="background">
         <img :src="src" alt="" width="100%" height="100%">
     </div>
     <!--头部内容-->
     <div class="Ctsconnet">
       <v-container fluid>
         <v-layout row>
           <v-flex xs4 order-lg2>
             <v-card dark tile flat color="error">
                  <!--//头像-->
               <router-link to="/zujianmn">
                 <img :src="src" width="100%" height="100%">
               </router-link>
             </v-card>
           </v-flex>
           <v-flex xs8>
             <v-card dark tile flat color="darken-4">
                <div class="yfname" >
                  <h1>真善美大药房</h1>
                  <h5><span>1</span>普通会员</h5>
                </div>
             </v-card>
           </v-flex>
         </v-layout>
       </v-container>
     </div>
   </div>
</template>

<script>
    export default {
      name: "Carretdts",
      data () {
        return {
          src:require("../../assets/complete_bg.png")
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .background //头部背景图片
    width 100%
    z-index -1
    position fixed
    height 110px
  .Ctsconnet
    height 110px
    & img
      width 80px
      height 80px
      border-radius 100% !important
      border solid #ffffff91 5px
  .yfname
      color #ffffff
      text-align left
      margin-top 5%
      & span
        color #f00
        margin-right 3%
      & h1
        font-weight bold
        font-size 18px
        margin-bottom 5%

</style>
