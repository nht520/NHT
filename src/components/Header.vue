<template>
  <div class="Header">
    <v-card
      color="cyan lighten-4"
      flat
      tile
    >
      <v-toolbar dense>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>首页</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <!---->
  </div>
</template>
<script>
  export default {
    name: "Header",
    components: {

    },
    data (){
      return{
        bars: [
          { 'class': '' },
          { 'class': '', dark: true },
          { 'class': 'primary', dark: true },
          { 'class': 'elevation-0' }
        ],
      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  .Header{
    position: fixed;
    width: 100%;
    z-index :999;
  }
  .Header .lighten-4{
    background-color: #f44336!important;
    color: #ffffff;
  }


</style>
