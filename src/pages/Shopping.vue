<template>
    <div class="shopping">
        <news></news>
        <h1>我是列表{{this.$store.state.count}}</h1>
        <button @click="inck">改变数量</button>

      <ul>
        <li v-for="item in splist">
          <p >{{item.title}}</p>
        </li>
      </ul>


    </div>
</template>

<script>
    import News from "../components/News/News";
    export default {
      name: "Shopping",
      components: {News},
      data() {
            return {
              splist:[]
            }
        },
        mounted() {
           this.splist=this.$store.state.rest;
        },

        created () {
          sessionStorage.setItem('splist', this.splist);
          // sessionStorage.setItem('title')
        },

        methods:{

          inck () {
            this.$store.commit('incCount');   /*触发 mutations 改变 state里面的数据*/
          },

        },

    }
</script>

<style scoped>

</style>
