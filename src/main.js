// Webpack CSS import
import 'onsenui/css/onsenui.css';
import './onsen-css-components.css';


// JS import
import Vue from 'vue';
import Vuex from 'vuex';
import VueOnsen from 'vue-onsenui';
import router from './router';
Vue.use(Vuex);
Vue.use(VueOnsen);
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount('#app')