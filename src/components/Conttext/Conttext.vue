<template>
  <div id="e3" style=" margin: auto;" class="lighten-3" >
    <v-card >
      <v-container fluid grid-list-lg >
        <v-layout row wrap v-for="item in conttext" :key="item.id">
          <router-link :to="item.path">
            <v-flex class="conttext" xs12>
              <v-card color="purple" class="white--text" >
                <v-layout row >
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                          <div class="headline">{{item.title}}</div>
                          <div>{{item.describe}}</div>
                          <div>{{item.time}}</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media :src="item.src"
                      height="125px" contain></v-card-media>
                  </v-flex>
                </v-layout>
                <v-divider light v-if="!item.xgts"></v-divider>
                <v-card-actions class="pa-3">
                  <h1>{{item.onxtt}}</h1>
                  <v-spacer></v-spacer>
                  <v-icon>{{item.comment}}</v-icon>
                  <v-icon>{{item.comment}}</v-icon>
                  <v-icon>{{item.comment}}</v-icon>
                  <v-icon>{{item.comment}}</v-icon>
                  <v-icon>{{item.comment}}</v-icon>
                </v-card-actions>

              </v-card>
            </v-flex>
          </router-link>
        </v-layout>
      </v-container>
    </v-card>

  </div>
</template>

<script>
  export default {
      name: "Conttext",
      props: {
        conttext:{
          default: function () {
            return  [
              {
                xgts:false,
                title:'我是标题1',
                describe:'把补短板作为当前深化供给侧结构性改革的重点任务，加大基础设施领域补短板的力度。自2015年开始，以去产能、去库存、去杠杆、降成本、补短板这“三去一降一补”为重点的供给侧结构',
                time:'2018-03-01 16:00',
                src: require('../../assets/slideShow/pic1.jpg'),
                onxtt:'我是123456789',
                comment:'star_border',
                path:'/Particulars'
              },
              {
                xgts:false,
                title:'我是标题2',
                describe:'性改革持续发力。随着改革深入，在各项工作不断取得新进展新成绩，在外部环境发生明显变化的今天，此次政治局会议，专门强调补短板，究竟有何深意？',
                time:'2018-03-01 16:00',
                src: require('../../assets/slideShow/pic1.jpg'),
                onxtt:'我是987654321',
                comment:'star_border',
                path:'/Particulars'
              },
            ]
          },
        },
      },
  }
</script>

<style scoped>
  .conttext{
    margin-top: 2%;
  }
  .layout{
    text-align: left;
    color: #ffffff;
  }
  .layout a{
    text-align: left;
    color: #ffffff;
    text-decoration: none;
  }
  .container{
    padding: 0px 16px;
  }
</style>
