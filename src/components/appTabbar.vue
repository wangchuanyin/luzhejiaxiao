<template>
<v-ons-page>
    <v-ons-toolbar>
          <div class="left">
              <!-- <v-ons-back-button @click.prevent="pageStack.splice(1, pageStack.length - 1)"></v-ons-back-button> -->
          </div>
          <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar    position="auto"
        :tabs="tabs"
        :index.sync="activeIndex" 
     >
     
      </v-ons-tabbar> 
    </v-ons-page> 
</template>

<script>
import homePage from './homePage';
import regeditPage from './regeditPage';
import myProfilePage from './myProfilePage';
export default {
name:'appTabbar',
 data() {
    return {
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
          page: myProfilePage,
          key: "myProfilePage"
        }
      ]
     
    };
  },
  props:['pageStack'],
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
    homePage,regeditPage,myProfilePage
  }
};
</script>
<style  scoped>
</style>