<template>
  <div>
    <div class="phonetype">
      <img
        src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
        alt=""
      />
      <form action="" class="form">
        <div class="form_content">
          <div class="phone">
            <input type="text" placeholder="请输入手机号" v-model="phone" />
            <span>请输入正确的手机号码</span>
          </div>

          <div class="password">
            <div class="password_input">
              <input type="text" placeholder="请输入短信验证码" v-model="password"/>
              <span class="login_pw">获取短信验证码</span>
            </div>
            <span>请输入手机号码</span>
          </div>

          <div>
            <span class="hint_left">遇到问题？</span>
            <span class="hint_right">使用密码验证登录</span>
          </div>
          <div class="typelogin" @click="login">登录</div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name:'PhoneLogin',
  data(){
    return{
      phone:'',
      password:'',
    }
  },
  methods:{
    login(){
      const {phone,password} = this
      console.log(phone,password)
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.phonetype
  font-size 16px
  img
    width 127px
    height 45px
  .form_content
    width 100%
    height 400px
    display flex
    flex-direction column
    justify-content space-around
    input
      width 100%
      height 40px
      padding 5px
      border-bottom 1px solid #999
    .typelogin
      margin 0 auto
      width 200px
      height 50px
      line-height 50px
      text-align center
      background-color #dd1a21
      color #fff
</style>
