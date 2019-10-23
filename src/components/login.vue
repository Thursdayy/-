<template>
  <div class="login">
    <div class="box">
      <header class="head-l">
        <img src="http://shadow.elemecdn.com/faas/h5-gray/static/logo.ba876fd.png" />
      </header>
      <div class="login-box">
        <form>
          <section>
            <input type="tel" placeholder="请输入手机号码" v-model="phone" maxlength="11" />
            <button class="disabled" ref="btn">获取验证码</button>
          </section>
          <section>
            <input type="tel" placeholder="验证码" v-model="code" maxlength="6" />
          </section>
        </form>
        <p>
          新用户登录即自动注册，并表示已同意
          <a>《用户服务协议》</a>和
          <a>《隐私权政策》</a>
        </p>
        <button class="lg" @click="loginEvt">登录</button>
        <p class="about">关于我们</p>
      </div>
    </div>
    <button class="b" ref="b">请输入正确手机号</button>
  </div>
</template>

<script>
import { Login } from "@/api/login.js";
export default {
  name: "login",
  data: function() {
    return {
      phone: "",
      code: "",
      data: {
        phone: "",
        code: ""
      }
    };
  },
  watch: {
    phone(newval) {
      if (newval.length < 11) {
        return;
      }
      if (newval == "" || newval == null) {
        return;
      }
      if (!isNaN(newval)) {
        this.$refs.btn.classList.remove("disabled");
        this.data.phone = this.phone;
      }
    },
    code(newval) {
      if (newval.length < 3) {
        return;
      }
      if (newval == "" || newval == null) {
        return;
      }
      if (!isNaN(newval)) {
        this.data.code = this.code;
      }
    }
  },
  methods: {
    loginEvt() {
      // if ( && this.data.code != "") {
      //   // console.log('yes');
      //   Login(this.data).then(res => {
      //     this.$store.commit('saveUser', res);
      //   });
      //   this.$router.push({name:'home', params:{}});
      // }
      // console.log(this.data.phone);
      if (this.data.phone != "") {
        if (/^1[3456789]\d{9}$/.test(this.data.phone)) {
          if (this.data.code == "") {
            this.$refs.b.innerText = "请输入验证码:任意1~6位数";
            this.$refs.b.style.opacity = 1;
            setTimeout(() => {
              this.$refs.b.style.opacity = 0;
            }, 2000);
          } else {
            Login(this.data).then(res => {
              this.$store.commit("saveUser", res);
            });
            this.$router.push({ name: "home", params: {} });
          }
        } else {
          this.$refs.b.innerText = "请输入正确手机号,或者:13642581689";
          this.$refs.b.style.opacity = 1;
          setTimeout(() => {
            this.$refs.b.style.opacity = 0;
          }, 2000);
        }
      }
      if (this.data.phone == "") {
        this.$refs.b.innerText = "请输入正确手机号,或者:13642581689";
        this.$refs.b.style.opacity = 1;
        setTimeout(() => {
          this.$refs.b.style.opacity = 0;
        }, 2000);
      }
    }
  }
};
</script>
<style lang="less" scoped >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a,
a:hover,
a:focus,
a:visited {
  text-decoration: none;
  color: #333;
}
ul,
ol {
  list-style: none;
}
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #333;
  padding-top: 0.4rem;
}
.box {
  margin: 0 auto;
  /* header */
  > .head-l {
    width: 3rem;
    height: 0.6rem;
    // background-color: pink;
    margin: 0 auto;
    img {
      width: 1.3rem;
      height: 0.56rem;
      display: block;
      background-color: #fff;
      margin: 0.02rem auto;
      // text-align: center;
    }
  }
  // box
  .login-box {
    form {
      margin-top: 0.16rem;
    }
    section {
      margin: 0 auto;
      position: relative;
      width: 3rem;
      height: 0.48rem;
      margin-bottom: 0.16rem;
      input {
        height: 100%;
        width: 100%;
        font-size: 0.14rem;
        color: #999;
        margin: 0 auto;

        &:focus {
          border: 1px solid #58a6e7;
        }
      }
      button {
        position: absolute;
        top: 50%;
        right: 0.05rem;
        transform: translateY(-50%);
        border: 0;
        color: #58a6e7;
        font-size: 0.14rem;
      }
    }
    > p {
      display: block;
      width: 3rem;
      margin: 0 auto;
      a {
        color: #2395ff;
      }
      &:last-of-type {
        text-align: center;
        font-size: 0.12rem;
      }
    }
    .lg {
      display: block;
      height: 0.42rem;
      width: 3rem;
      margin: 0.3rem auto 0.2rem;
      background-color: #4cd96f;
      color: #fff;
      border: 0;
    }
  }
  //
  .disabled {
    pointer-events: none;
    color: #999 !important;
  }
}
.b {
  padding: 0.06rem;
  border-radius: 0.15rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  font-size: 0.12rem;
  margin: 0.5rem auto;
  // text-align: center;
  opacity: 0;
  display: block;
  transition: all 0.5s ease;
}
</style>