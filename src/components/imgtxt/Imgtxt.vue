<template>
    <div class="Imgtxt">
      <v-container fluid grid-list-sm>
        <v-flex xs12 sm6 offset-sm3 v-for="item in imgtxt" :key="item.id">
            <v-card-media><img :src="item.src"> </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{item.title}}</h3>
                <div>{{item.text}}</div>
              </div>
            </v-card-title>
        </v-flex>
      </v-container>
    </div>
</template>

<script>
    export default {
      name: "Imgtxt",
      props: {
        imgtxt:{
          default: function () {
            return  [
              {
                src: require('../../assets/slideShow/pic1.jpg'),
                title:'Kangaroo Valley Safari',
                text:'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
              },
              {
                src: require('../../assets/slideShow/pic1.jpg'),
                title:'Kangaroo Valley Safari',
                text:'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
              }
            ]
          },
        },
      },
      methods:{

      }
    }
</script>

<style scoped>
  .Imgtxt img{
    height: 160px;
  }
</style>
