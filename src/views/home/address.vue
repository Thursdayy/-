<template>
  <div class="address">
    <div v-if="!flag" >
      <header class="head">
        <span class="iconfont icon-shangyiye" @click="returnEvt"></span>
        选择收货地址
        <span>新增地址</span>
      </header>
      <!-- search address -->
      <div class="search-box" ref="btn">
        <div class="btn" @click="ltEvt" >
          {{$store.state.location}}
          <span class="iconfont icon-down"></span>
        </div>
        <div class="box">
          <input type="text" placeholder="请输入地址" />
          <span class="iconfont icon-sousuo"></span>
        </div>
      </div>
      <p class="title">当前地址</p>
      <p class="currentAddr">
        <span>{{$store.state.location}}</span>
        <span>重新定位</span>
      </p>
      <p class="title">收货地址</p>
      <div class="receAddr">
        <p>
          <span>653689 郭</span>
          <span class="small">先生</span>
          <span class="small">13642581689</span>
        </p>
        <p>科学城</p>
      </div>
    </div>
    <mt-city v-if="flag" @ret="retEvt"></mt-city>
  </div>
</template>
<script>
import city from './city.vue'
export default {
  name: "addiess",
  data: function() {
    return {
      flag: false,
    };
  },
  created: function() {},
  methods: {
    // 返回上一页
    returnEvt() {
      this.$emit("retParent");
      // this.$parent.reEvt();
    },
    // 下一页选择城市
    ltEvt(){
      this.flag = true;
    },
    // 从子组件返回
    retEvt(){
      this.flag = false;
    },
  },
  components:{
    'mt-city': city
  }
};
</script>

<style lang="less" scoped>
.address {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  color: #333;
  position: fixed;
}
* {
  margin: 0;
  padding: 0;
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
// header
.head {
  width: 100%;
  padding: 0rem 0.1rem;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  position: relative;
  background: linear-gradient(90deg, #0af 0%, #0085ff 100%);
  color: #fff;
  span {
    position: absolute;
    &:first-of-type {
      left: 0.1rem;
      font-size: 0.2rem;
    }
    &:last-of-type {
      right: 0.1rem;
    }
  }
}
// search-box
.search-box {
  width: 100%;
  padding-left: 0.05rem;
  background-color: #fff;
  display: flex;
  .btn {
    width: 0.8rem;
    height: 0.6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.6rem;
    font-size: 0.14rem;
    padding-left: 0.08rem;
    border: 0;
    .iconfont {
      font-size: 0.12rem;
    }
  }
  .box {
    padding: 0.1rem 0.15rem;
    position: relative;
    input {
      width: 2.8rem;
      height: 100%;
      // line-height: .6rem;
      margin-bottom: 0;
      border: 0;
      // margin-top: .1rem;
      background-color: #fafafa;
      padding-left: 0.3rem;
      font-size: 0.12rem;
    }
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0.2rem;
    }
  }
}
// title
.title {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  padding-left: 0.12rem;
  font-size: 0.12rem;
}
// currentAddress
.currentAddr {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  padding-left: 0.12rem;
  padding-right: 0.12rem;
  font-size: 0.14rem;
  color: #333;
  font-weight: 700;
  background-color: #fff;
  span {
    &:last-of-type {
      float: right;
      color: #2395ff;
      font-weight: 400;
    }
  }
}
// rece Address
.receAddr {
  width: 100%;
  padding: 0.1rem 0.12rem;
  background-color: #fff;
  span {
    &:first-of-type {
      color: #000;
      font-size: 0.14rem;
      font-weight: 700;
      margin-right: 0.05rem;
    }
    .small {
      font-size: 0.12rem;
      margin-right: 0.1rem;
    }
  }
  p {
    &:last-of-type {
      font-size: 0.13rem;
      color: #000;
    }
  }
}
</style>