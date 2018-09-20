<template>
  <v-card flat>
        <div class="Headerone">
          <v-toolbar>
            <v-btn icon>
                <v-icon @click="back">reply</v-icon>
            </v-btn>
            <v-toolbar-title>{{text}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon  @click="logClick" >more_vert</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
    <!--弹出层-->
    <Dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <Sheest></Sheest>
    </Dialog>

  </v-card>
</template>
<script>
  import Dialog from "./dialog/dialog";
  import Sheest from "./Sheest/Sheest";
  export default {
    name: "Headerone",
    components: {
      Sheest,
      Dialog
    },
    data (){
      return{
        isShowLogDialog: false,
      }
    },
    props: ['text'], // 直接简写方式，不指定类型
    methods:{
      back(){
        this.$router.go(-1);//返回上一层
      },
      //弹出层
      logClick () {
        this.isShowLogDialog = true
      },
      closeDialog (attr) {
        this[attr] = false
      },
    },
  }
</script>
<style>
  .Headerone{
    position: fixed;
    width: 100%;
    z-index: 999;
    background: #fff;
  }
  .Headerone .v-toolbar__content{
    height: 48px !important;
  }
</style>
