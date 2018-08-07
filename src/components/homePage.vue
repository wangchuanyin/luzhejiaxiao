<template id="home">
 <v-ons-page>
   <div class="content">
    <p style="text-align: center">
      Welcome home.<br><br>{{ myProp }}
    </p>
   </div>
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