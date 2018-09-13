<template>
   <v-ons-navigator swipeable
      :page-stack="pageStack"
      :options="options"
      :pop-page="storePop"
    > 
   </v-ons-navigator>
   
</template>

<script>
import appTabbar from './components/appTabbar';


export default {
  name: "App",
  beforeCreate() {
   this.$store.commit('navigator/push', appTabbar);
  },
  data(){
    return {}
  },
  methods:{
    storePop() {
      this.$store.commit('navigator/pop');
    }
  },
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    },
    options() {
      return this.$store.state.navigator.options;
    }
  },
  components:{
    appTabbar
  }
};
</script>

<style>

</style>
