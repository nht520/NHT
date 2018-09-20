<template>
  <div class="News" >
    <!--请求数据 列表-->
    <ul>
      <li v-for="item in list">
        {{item.dateline}}
      </li>
    </ul>

  </div>
</template>
<script>
    export default {
        name: "News",
        data() {
            return {
              list:[]
            }
        },
      methods:{
        requestData(){
          //请求数据
          var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
          this.$http.get(api).then((res)=>{
            console.log(res);
            //注意this指向
            this.list=res.body.result;
            //数据放在store里面
            this.$store.commit('addList',res.body.result);
          },function(err){
            console.log(err);
          })
        }
      },
      mounted(){
        //判断 store里面有没有数据
        var listData=this.$store.state.list;
        console.log(listData.length);
        if(listData.length>0){
          this.list=listData;
        }else{
          this.requestData();
        }
      }
    }
</script>

<style scoped>

</style>
