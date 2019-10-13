<template>
  <div class="box">
    <header class="head">
      <router-link to tag="div">
        <div class="img-box"></div>
        <div class="item-box">
          <h3>登录/注册</h3>
          <span class="iconfont icon-phone"></span>
          <span>登录后享受更多特权</span>
          <span class="iconfont icon-next next"></span>
        </div>
      </router-link>
    </header>
    <div class="section">
      <router-link to class="sec-box">
        <p class="iconfont icon-red-pocket"></p>
        <p>红包</p>
      </router-link>
      <router-link to class="sec-box">
        <p class="iconfont icon-coin"></p>
        <p>金币</p>
      </router-link>
    </div>
    <div class="add">
      <mt-cell title="我的地址" is-link class="myadd">
        <span class="iconfont icon-location"></span>
      </mt-cell>
    </div>
    <div class="store">
      <mt-cell title="金币商城" is-link class="store-coin">
        <span class="iconfont icon-store"></span>
      </mt-cell>
      <mt-cell title="分享拿20元现金" is-link class="store-cash">
        <span class="iconfont icon-icon-gift"></span>
      </mt-cell>
    </div>
    <div class="store kefu">
      <mt-cell title="我的客服" is-link class="store-coin">
        <span class="iconfont icon-erji"></span>
      </mt-cell>
      <mt-cell title="下载饿了么app" is-link class="store-cash">
        <span class="iconfont icon-changyonglogo40"></span>
      </mt-cell>
      <mt-cell title="规则中心" is-link class="store-cash">
        <span class="iconfont icon-guizeshuoming"></span>
      </mt-cell>
    </div>
    <mt-tabbar :selected = "selected"></mt-tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar.vue";
export default {
  name: "my",
  components: {
    "mt-tabbar": Tabbar
  },
  data(){
    return {
      selected:"me"
    }
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a,
a:hover,
a:focus {
  text-decoration: none;
  color: #333;
}
.box {
  background-color: #eee;
  font-size: 0.14rem;
  height: 100%;
  .head {
    height: 1.1rem;
    width: 100%;
    padding: 0.25rem 0.15rem;
    background: linear-gradient(90deg, #0af 0%, #0085ff 100%);
    overflow: hidden;
    .img-box {
      float: left;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      background-color: blue;
    }
    .item-box {
      float: left;
      width: calc(100% - 0.6rem);
      height: 100%;
      padding-left: 0.18rem;
      color: #fff;
      position: relative;
      h3 {
        font-size: 0.26rem;
      }
      .next {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .section {
    width: 100%;
    height: 0.84rem;
    display: flex;
    flex-wrap: nowrap;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .sec-box {
      width: 50%;
      height: 100%;
      text-align: center;
      display: block;
      line-height: 100%;
      padding-top: 0.25rem;
      &:first-of-type {
        border-right: 1px solid #eee;
      }
      .icon-red-pocket,
      .icon-coin {
        margin-bottom: 0.1rem;
        color: red;
      }
    }
  }
  .add {
    width: 100%;
    margin: 0.1rem 0rem;
    border: 0.01rem solid #eee;
    .myadd {
      background-color: #fff;
      padding-left: 0.2rem;
      position: relative;
      .icon-location {
        border: 0;
        position: absolute;
        left: 0.1rem;
        top: 50%;
        transform: translateY(-50%);
        color:#0085ff;
      }
    }
  }
  .store {
    width: 100%;
    border: 1px solid #eee;
    margin-bottom: .1rem;
    .store-coin,.store-cash{
      padding-left: .2rem;
      position: relative;
      .iconfont{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: .1rem;
        color: orange;
      }
    }
    .store-coin{
      border-bottom: 0rem;
    }
  }
  .kefu{
    .iconfont{
      color: #0af !important;
      font-weight: 700;
    }
  }
}
</style>