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
   <div class="navigationItems">
    
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
          img:"/image/b1.jpg"
        },
        {
          img:"/image/b2.jpg"
        },
         {
           img:"/image/b1.jpg"
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
created(){


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
   height: 20rem;
   width:100%;
   margin-top:1px;
}
.home-swiper .home-swiper-img > img{
 
  height: 20rem;
   width:100%;
}
.navigationItems{
  display: flex;
  background-color:#fff;
  width: 100%;
  height: 16rem;
  flex-direction: row;
  justify-content: center;
  margin-top:0.5rem;
}     
        

</style>