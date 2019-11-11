import Vue from 'vue';
import App from './App.vue';
import "jquery";
import "bootstrap";
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Home from './components/home.vue'
import Next from './components/next.vue';
import Playlist from './components/playlist.vue'


library.add(faSearch)
library.add(faRedo)
library.add(faPlus)
library.add(faList)
library.add(faHeadphones)
library.add(faMinus)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '*',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/next',
      component: Next
    },
    {
      path: '/playlist',
      component: Playlist
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')