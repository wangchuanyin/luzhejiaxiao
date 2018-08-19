<template id="home">
 <v-ons-page>
   <v-ons-carousel style="height:200px;width100%" swipeable auto-scroll :overscrollable="true"
      :index.sync="carouselIndex" update:index
    >
      <v-ons-carousel-item v-for="(value, key) in items" :key="key" :style="{backgroundColor: value}">
        <div style="text-align: center; font-size: 30px; margin-top: 49px; color: #fff;">
          <img src="../assets/image/banner.jpg"/>

        </div>
      </v-ons-carousel-item>
    </v-ons-carousel>

    <div :style="dots">
      <span :index="dotIndex - 1" v-for="dotIndex in Object.keys(items).length" :key="dotIndex" style="cursor: pointer" @click="carouselIndex = dotIndex - 1">
        {{ carouselIndex === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
      </span>
    </div> 
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
   carouselIndex: 0,
   items: {
        BLUE: '#085078',
        DARK: '#373B44',
        ORANGE: '#D38312'
    },
    dots: {
        textAlign: 'center',
        fontSize: '30px',
        color: '#fff',
        position: 'absolute',
        top: '120px',
        left: 0,
        right: 0
    }
 };
 },

 components: {},

 computed: {},



 methods: {}
}

</script>
<style  scoped>
</style>