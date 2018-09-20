// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 外部UI插件'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// vuetify
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
Vue.use(Vuetify)
//数据
import axios from "axios"
Vue.prototype.$axios = axios;
import VueResource from 'vue-resource'
Vue.use(VueResource);

//状态管理
import Vuex from 'vuex'
import store from './Store/store'
Vue.use(Vuex)

// 解决不同组件 页面之间的数据共享  数据持久化
Vue.config.productionTip = false
/*eslint-disable no-new */
new Vue({
  el: '#App',
  router,
  store,
  components: {App},
  template: '<App/>'
})
