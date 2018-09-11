<template>
  <v-ons-list>
    <v-ons-list-header><span class="title">最新资讯</span>  <v-ons-icon icon="md-volume-up"  ></v-ons-icon></v-ons-list-header>
    <v-ons-list-item modifier="chevron" tappable>
            <div class="left">
              <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
            </div>
            <div class="center">
              <span class="list-item__title">2018-09-10</span><span class="list-item__subtitle">楼德万通驾校开业了,报名费2400</span>
            </div>
    </v-ons-list-item>
    <v-ons-list-item modifier="chevron" tappable>
            <div class="left">
              <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
            </div>
            <div class="center">
              <span class="list-item__title">2018-09-10</span><span class="list-item__subtitle">On the Internet</span>
            </div>
    </v-ons-list-item>
    <v-ons-list-item modifier="chevron" tappable>
            <div class="left">
              <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
            </div>
            <div class="center">
              <span class="list-item__title">2018-09-10</span><span class="list-item__subtitle">On the Internet</span>
            </div>
    </v-ons-list-item>
        <v-ons-list-item modifier="chevron" tappable>
            <div class="left">
              <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
            </div>
            <div class="center">
              <span class="list-item__title">2018-09-10</span><span class="list-item__subtitle">On the Internet</span>
            </div>
    </v-ons-list-item>
  </v-ons-list>
</template>
<script>
export default {
    name:'newsPage',
    data(){
       return{

       } 
    }
}
</script>
<style>
.title{
  font-size: 1.1rem;
  font-weight: 600;
  color:dodgerblue
}
.title + .ons-icon{
  font-size:1.5rem;
  color:red;
  margin-left:1rem;
}
.listItem{
  background-color:#fff;
}

</style>
