<template>
    <div>
      <!--底部切换-->
      <v-card height="200px" flat>
      <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav1 }}
      </div>
      <v-bottom-nav :active.sync="bottomNav1" :value="true" absolute color="transparent">
        <v-btn color="teal" flat  v-for="(item,index) in fsjf" :value="item.value" :key="index">
          <span>{{item.text}}</span>
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
        </v-bottom-nav>
      </v-card>
      <h1>
        循环组件
      </h1>
      <v-tabs centered color="cyan" dark icons-and-text>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab href="#tab-1">Recents</v-tab>
        <v-tab href="#tab-2">Favorites</v-tab>
        <v-tab href="#tab-3">Nearby</v-tab>
        <v-tabs-items>
          <v-tab-item v-for="(item,index) in felj" :id="'tab-' + index" :key="index">
            <v-card flat>
              <v-card-text :is="item.com"></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
      <h1></h1>

    </div>
</template>

<script>
import Header from "../components/Header";
import Sideshow from "../components/Sideshow";
export default {
  name: "zujiamn",
  components: {Sideshow, Header},
  data() {
      return{
        bottomNav1:'recent',
        fsjf:[
          {
            text:'Recent',
            icon:'history',
            value:"recent"
          },
          {
            text:'Favorites',
            icon:'favorite',
            value:"favorites"
          },
          {
            text:'Nearby',
            icon:'place',
            value:"nearby"
          },
        ],
        // 循环组件
        felj:[
          {
            com:'Header'
          },
          {
            com:'Sideshow'
          },
          {
            com:'Header'
          },
        ]
      }
    }
}
</script>

<style scoped>

</style>
