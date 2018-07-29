<template id="home">
 <v-ons-page>
    <p style="text-align: center">
      Welcome home.<br><br>{{ myProp }}
    </p>
  </v-ons-page>
</template>

<script>
export default {
name:'homePage', 
props:["myProp"],  
 data () {
 return {
 };
 },

 components: {},

 computed: {},



 methods: {}
}

</script>
<style  scoped>
</style>