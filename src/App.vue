<template>

  <div id="app">
    <v-ons-navigator swipeable
      :page-stack="pageStack"
      @push-page="pageStack.push($event)">
   
      <v-ons-page>
        <v-ons-toolbar>
          <div class="left">
              <v-ons-back-button @click.prevent="pageStack.splice(1, pageStack.length - 1)"></v-ons-back-button>
          </div>
          <div class="center">{{ title }}</div>
        </v-ons-toolbar>

      <v-ons-tabbar    position="auto"
        :tabs="tabs"
        :visible="true"
        :index.sync="activeIndex"
      >
      </v-ons-tabbar> 
    </v-ons-page> 
  </v-ons-navigator>
  </div>
</template>

<script>
import homePage from './components/homePage';
import regeditPage from './components/regeditPage';
import myPage from './components/myPage';
import rem from './rem/rem.js'
export default {
  name: "app",
  data() {
    return {
      pageStack: [homePage],
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: '东山阴驾校',
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

</style>
