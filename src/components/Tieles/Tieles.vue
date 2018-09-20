<template>
    <div class="Tieles">
      <v-list-tile>
        <v-list-tile-content v-for="item in Tielse" :key="item.id">
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
          <v-list-tile-sub-title>{{item.marsha}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </div>
</template>

<script>
  export default {
    name: 'Tieles',
    props: {
      Tielse:{
        // type:String,
        // default:[],
        default: function () {
          return  [
            {
              title: '11111111',
              marsha: '222222222',
            },
          ]
        },
      },
    },
    mounted(){
      // console.log(this.slides)
    }
  }
</script>

<style scoped>

</style>
