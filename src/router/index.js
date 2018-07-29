import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
export default new Router({
    routes: [
      { path: '/hello', name: 'HelloWorld', component: HelloWorld }
    ]   
    //路由切换页面始终回到最顶部
    // scrollBehavior(to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }
  })