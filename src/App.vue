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
import newsPage from './components/newsPage';
import settingsPage from './components/settingsPage';
export default {
  name: "app",
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: 'Home',
          page: homePage,
          props: {
            myProp: 'This is a page prop!'
          },
          key: "homePage"
        },
        {
          icon: this.md() ? null : 'ion-ios-bell',
          label: 'News',
          page: newsPage,
          badge: 7,
          key: "newsPage"
        },
        {
          icon: this.md() ? null : 'ion-ios-settings',
          label: 'Settings',
          page: settingsPage,
          key: "settingsPage"
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
    homePage,newsPage,settingsPage
  }
};
</script>

<style>
.root{
  toolbar-background-color: rgba(236,34,34,1);
}
</style>
