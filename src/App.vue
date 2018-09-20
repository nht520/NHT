<template>
  <div id="App">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  export default {
      name: "App",
      data() {
        return{
        }
      },
      created() {
          document.body.removeChild(document.getElementById('Loading'))
          alert(111)
      }
  }
</script>

<style scoped>

</style>
