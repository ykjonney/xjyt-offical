import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from "axios";
// import VueLazyload from 'vue-lazyload';
import moment from 'moment';
import Foot from './components/footer.js'
// import 'lib-flexible/flexible'
//import './utils/rem'
import "babel-polyfill"
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(Foot)
 // Vue.use(VueLazyload
 // ,{
 //     error:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586506889841&di=837faae99313a1882367cd5efc0fbc9c&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F3e0584a51033e0c6017456663801a0dffa8a54d22cbaf-ZlcuTp_fw658',
 //     loading:'http://test.ipcn.xyz/media/carousel/%E9%A6%96%E9%A1%B5%E7%9F%BF%E6%B1%A0.png',
 // })
Vue.config.productionTip = false;
Vue.use(BaiduMap,{
  ak:'GQj2koEmbeYhjdw7kXsQzSxKuTxMM0AF'
});
Vue.prototype.$http=Axios;
Vue.prototype.url='https://www.ipcn.xyz/api/v1'; 
// Vue.prototype.url='http://192.168.1.208:8080/api/v1';
// Vue.prototype.url='http://test.ipcn.xyz/api/v1';
// Vue.prototype.urll='https://apitest.ipcn.xyz/api/v1/';
Vue.prototype.urll='https://api.ipcn.xyz/api/v1/';
Vue.use(ElementUI);
Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
