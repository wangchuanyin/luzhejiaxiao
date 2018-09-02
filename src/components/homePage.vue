<template id="home">
 <v-ons-page>
   <v-ons-carousel id="ons-carousel" class="home-swiper" fullscreen swipeable auto-refresh auto-scroll overscrollable
      :index.sync="carouselIndex" auto-scroll-ratio="0.1" 
    >
      <v-ons-carousel-item v-for="(value, key) in swiper" :key="key" class="home-swiper-item">
        <div class="home-swiper-img">
          <img :src="value.img"/>

        </div>
      </v-ons-carousel-item>
    </v-ons-carousel>

    <div :style="dots">
      <span :index="dotIndex - 1" v-for="dotIndex in Object.keys(swiper).length" :key="dotIndex" style="cursor: pointer" @click="carouselIndex = dotIndex - 1">
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
   swiper:[
        {
          img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg"
        },
        {
          img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg"
        },
         {
          img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg"
        }             
    ],
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

mounted(){
  
},
 components: {},

 computed: {},



 methods: {
   
 }
}

</script>
<style  scoped>
.home-swiper{
   height: 5.5rem;
   width:100%;
   margin-top:1px;
}
       
        

</style>