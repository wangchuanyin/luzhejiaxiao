<template>
 <v-ons-page >
     <v-ons-toolbar>
          <div class="left">
              <v-ons-back-button >返回</v-ons-back-button> 
          </div>
          <div class="center">我要报名</div>
    </v-ons-toolbar>
    <div class="content">
        <h1>注册成功后，手机号作为登陆账号。</h1>
        <v-ons-list>
            <v-ons-list-item>
            <div class="center">
                    <v-ons-icon icon="md-smartphone"   size="16px"></v-ons-icon>
                <v-ons-input type ="number" placeholder="请输入手机号"  float>
                </v-ons-input>
            </div>
            </v-ons-list-item>
             <v-ons-list-item>
            <div class="center">
                 <v-ons-icon icon="md-lock"   size="16px"></v-ons-icon>
                <v-ons-input type ="password" placeholder="请输入密码"  float>
                </v-ons-input>
            </div>
            </v-ons-list-item>
             <v-ons-list-item>
            <div class="center">
                <v-ons-icon icon="md-lock"   size="16px"></v-ons-icon>
                <v-ons-input type ="password" placeholder="请再次输入密码"  float>
                </v-ons-input>
            </div>
            </v-ons-list-item>
             <v-ons-list-item>
            <div class="center">
                <v-ons-icon icon="md-shield-check"   size="16px"></v-ons-icon>
                <v-ons-input type ="password" placeholder="请输入验证码"  float>
                </v-ons-input>
                 <v-ons-button  style="margin: 6px 0;background-color:rgba(230, 22, 22, 1)" @click="send()"  v-if="!sendMsgDisabled">获取验证码</v-ons-button>
                 <v-ons-button modifier="outline" style="margin: 6px 0;" v-if="sendMsgDisabled">{{time+'秒后获取'}}</v-ons-button>
                  <span ></span>
            </div>
            </v-ons-list-item>
       </v-ons-list>
        <section style="margin: 16px">
          <v-ons-button modifier="large" style="background-color:rgba(230, 22, 22, 1)">立即报名</v-ons-button>
        </section>
    </div>
  </v-ons-page>
</template>

<script>
export default {
name:'regeditPage',
 data () {
 return {
    time: 60, // 发送验证码倒计时
    sendMsgDisabled: false
 };
 },

 components: {},

 computed: {},


 methods: {
 send() {
    let me = this;
    me.sendMsgDisabled = true;
    let interval = window.setInterval(function() {
     if ((me.time--) <= 0) {
      me.time = 60;
      me.sendMsgDisabled = false;
      window.clearInterval(interval);
     }
    }, 1000);
   }
 }
}

</script>
<style  scoped>
.content {
  margin-top: 4.3rem;
}
.content h1{
    font-size: 1.8rem;
    margin-left:1rem;
}
.content .ons-icon{
    margin-right:2rem;
}
</style>