// Webpack CSS import
import 'onsenui/css/onsenui.css';
import './onsen-css-components.css';
import storeLike from './store.js';
// JS import
import Vue from 'vue';
import Vuex from 'vuex';
import VueOnsen from 'vue-onsenui';
Vue.use(Vuex);
Vue.use(VueOnsen);
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    store: new Vuex.Store(storeLike),
    beforeCreate() {
        // Shortcut for Material Design
        Vue.prototype.md = this.$ons.platform.isAndroid();

        // Set iPhoneX flag based on URL
        if (window.location.search.match(/iphonex/i)) {
            document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
            document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
        }
    }
})