<template>
  <div id="Home">
    <Header></Header>
    <!--轮播-->
    <Sideshow :slides="slidshwo"></Sideshow>
    <!--九宫格-->
    <Grid :list="Sudoku"></Grid>
    <!--内容-->
    <Conttext :conttext="conttext"></Conttext>
    <!---->
  </div>
</template>
<script>
import Sideshow from "../components/Sideshow";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Conttext from "../components/Conttext/Conttext";
export default {
  name: "Home",
  components: {
    Conttext,
    Header,
    Grid,
    Sideshow
    },
  //请求数据
  created () {
    //vue-VueResource
    this.$http.get("/static/root.json")
      .then(res => {
        this.Sudoku = res.data
      }, err => {
        console.log(err)
      });
    //axios
    // this.$axios.get("/static/root.json")
    //   .then(res => {
    //     this.Sudoku = res.data
    //   }, (err) => {
    //     console.log(err)
    //   })
  },
  mounted(){

  },
  //状态管理
  computed: {
    // Getting Vuex State from store/modules/activities
  },
  data () {
    return{
        //九宫格
      Sudoku:[

      ],
        //图文描述
        conttext:[
          {
            xgts:false,
            title:'我是标题哦',
            describe:'把补短板作为当前深化供给侧结构性改革的重点任务，加大基础设施领域补短板的力度。自2015年开始，以去产能、去库存、去杠杆、降成本、补短板这“三去一降一补”为重点的供给侧结构',
            time:'2018-03-01 16:00',
            src: require('../assets/slideShow/pic1.jpg'),
            onxtt:'我是123456789',
            comment:'star_border',
            path:'/Particulars'
          },
          {
            xgts:false,
            title:'我是标题2哦',
            describe:'性改革持续发力。随着改革深入，在各项工作不断取得新进展新成绩，在外部环境发生明显变化的今天，此次政治局会议，专门强调补短板，究竟有何深意？',
            time:'2018-03-01 16:00',
            src: require('../assets/slideShow/pic1.jpg'),
            onxtt:'我是987654321',
            comment:'star_border',
            path:'/Particulars'
          },
        ],
        //轮播
        slidshwo: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            text: '我是松鼠',
            patchc: '/zujianmn'
          },
          {
            src:  require('../assets/slideShow/pic2.jpg'),
            text: 'xxx2',
            patchc:'/Sideshow'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            text: 'xxx3',
            patchc: '/zujianmn'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            text: 'xxx4',
            patchc: '/zujianmn'
          }
        ],
      }
  },
  methods:{


  }
}
</script>
<style>
  #Home{
    margin-bottom: 56px;
  }
</style>
