<template >
 <v-ons-page id="homePage">
   <v-ons-carousel id="ons-carousel" class="home-swiper" fullscreen swipeable  auto-scroll overscrollable
      :index.sync="carouselIndex" auto-refresh auto-scroll-ratio="0.1" 
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
       <div class="navigationItem" @click="pushIntro()"> 
          <v-ons-fab class="itemImg" style="background-color:rgb(5, 197, 174);">
            <v-ons-icon icon="md-car" ></v-ons-icon>
          </v-ons-fab>
         <div class="itemTxt"><span >驾校简介</span></div>
       </div>
       <div class="navigationItem" @click="pushRegPage()"> 

          
          <v-ons-fab class="itemImg" style="background-color:rgb(255, 192, 0);">
            <v-ons-icon icon="md-edit"></v-ons-icon>
          </v-ons-fab>
         
         <div class="itemTxt" ><span >我要报名</span></div>
       </div>
       <div class="navigationItem" @click="pushRecommendPage()"> 

          <v-ons-fab class="itemImg"  style="background-color:rgba(230, 22, 22, 1);">
            <v-ons-icon icon="md-account-add"></v-ons-icon>
          </v-ons-fab>
         <div class="itemTxt"><span >我要推荐</span></div>
       </div>
   </div> 
    <news-page class="newsPage"></news-page>
  </v-ons-page>
  
</template>

<script>
import regeditPage from "./regeditPage";
import recommendPage from "./recommendPage";
import introducePage from "./introducePage";
import myProfilePage from "./myProfilePage";
import newsPage from "./newsPage";
export default {
    name:'homePage', 
   
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
      let self = this;
      document.addEventListener('hide', function(event) {
          if (event.target.matches('#homePage')) {
              window.clearInterval(self.intervalid1);
          }
        }, false);
      document.addEventListener('show', function(event) {
        self.carouselIndex = 0;
          if (event.target.matches('#homePage')) {
               self.refreshNav();
          }
        }, false);
    },
    mounted(){
        var _self = this;
    },
    beforeDestroy(){
      console.log("this is beforeDestory.......");
      window.clearInterval(this.intervalid1);
    },
    destroyed(){
      console.log("this is destroyed...........");
    },
    components:{
      introducePage,regeditPage,recommendPage,myProfilePage,newsPage
    },
    methods: {
      pushIntro(){
        this.$store.commit('navigator/push',introducePage);
      },
      pushRegPage(){
        this.$store.commit('navigator/push',regeditPage);
      },
      pushRecommendPage(){
         this.$store.commit('navigator/push',recommendPage);
      },
      refreshNav(){
        this.intervalid1 = window.setInterval(function(){
          console.log("------");
          if(this.carouselIndex<=0)
          {
            this.carouselIndex++;
          }
          if(this.carouselIndex>2){
              this.carouselIndex = 0;
          }
            document.querySelector('#ons-carousel').setActiveIndex(this.carouselIndex);
        }.bind(this),3000);
      }
    }
     
}


</script>
<style  scoped>
.home-swiper {
  height: 20rem;
  width: 100%;
  margin-top: 1px;
}
.home-swiper .home-swiper-img > img {
  height: 20rem;
  width: 100%;
}
.navigationItems {
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 8rem;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0.1rem;
  padding-top: 2rem;
}

.navigationItems .navigationItem {
  width: 33%;
  height: 7rem;
  text-align: center;
}

.navigationItems .navigationItem .itemImg {
  height: 5rem;
  display: block;
  margin: 0 auto 6px auto;
  transition:none
}
.navigationItems .navigationItem .itemTxt {
  font-size: 1.2rem;
  font-family: "Kreon";
  font-weight: 600;
  color: #666;
  padding: 0;
  word-wrap: normal;
}
.newsPage{
  margin-top:0.2rem;
}
</style>