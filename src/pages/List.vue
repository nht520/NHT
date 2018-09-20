<template>
  <div class="List">
    <Headerone :text="text"></Headerone>

    <News></News>
    <h1>我是列表{{this.$store.state.count}}</h1>
    <h1>我是列表{{this.$store.state.count}}</h1>
    <h1>我要乘以二{{this.$store.getters.computedCount}}</h1>
    <button @click="inck">改变数量</button>
    <ul>
      <li v-for="item in rest">
        <p>{{item.title}}</p>
      </li>
    </ul>

  </div>
</template>

<script>

    import Headerone from "../components/Headerone";
    import News from "../components/News/News";
    export default {
        name: "List",
        components: {
          News,
          Headerone
        },
        data () {
          return{
            text:'列表',
            rest:[]
          }
        },
      methods:{

        inck(){
          this.$store.commit('incCount');
        },
        requestData(){
          //请求数据
          var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
          this.$http.get(api)
            .then(res=>{
            console.log(res);
            //注意this指向
            this.rest=res.body.result;
            //数据放在store里面
            this.$store.commit('restList',res.body.result);
          },err=>{
            console.log(err);
          })
        }
      },
      mounted(){
        //判断 store里面有没有数据
        var restData=this.$store.state.rest;
        console.log(restData.length);
        if(restData.length>0){
          this.rest=restData;
        }else{
          this.requestData();
        }
      }

    }
</script>

<style scoped>
</style>
