<template>
  <div id="app">
    <v-ons-page>
      <v-ons-toolbar>
         <div class="center">{{ title }}</div>
      </v-ons-toolbar>
    <router-view></router-view>
    <v-ons-tabbar swipeable  animation="none" position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>

  </v-ons-page>
  </div>
</template>

<script>
import homePage from './components/homePage';
import regeditPage from './components/regeditPage';
import myPage from './components/myPage';
export default {
  name: "app",
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: '主页',
          page: homePage,
          props: {
            myProp: 'This is a page prop!'
          },
          key: "homePage"
        },
        {
          icon: this.md() ? null : 'ion-edit',
          label: '报名',
          page: regeditPage,
          key: "regeditPage"
        },
        {
          icon: this.md() ? null : 'fa-user',
          label: '我的',
          page: myPage,
          key: "myPage"
        }
      ]
    };
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  },
  components :{
    homePage,regeditPage,myPage
  }
};
</script>

<style>
ons-page:not([modifier~=material]) >.content {
  margin-top: 49px;
}
</style>
