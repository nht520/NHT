<template>
  <div class="Relation">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 >
        <v-list two-line v-for="(item,index) in list" :key="index">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">{{item.iphone}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.tel}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset v-if="!item.bdbottom"></v-divider>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
    export default {
      name: "Relation",
      props: {
        list:{
          // type:String,
          // default:[],
          default: function () {
            return  [
              {
                bdbottom:false,
                iphone:'fas fa-angry',
                tel:'惹我生气',
              },
              {
                bdbottom:false,
                iphone:'mail',
                tel:'惹我生气',
              },
              {
                iphone:'fas fa-angry',
                tel:'惹我生气',
              },
            ]
          },
        },
      },
    }
</script>

<style scoped>

</style>
