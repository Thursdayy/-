<template>
  <div class="SortBar">
    <div class="sort">
      <a class="item" @click="SortEvt">
        综合排序
        <span class="iconfont icon-down"></span>
      </a>
      <a class="item" @click="DistanceEvt">距离最近</a>
      <a class="item" @click="QuantityEvt">品质联盟</a>
      <a class="item" @click="ShaixuanEvt">
        筛选
        <span class="iconfont icon-shaixuan"></span>
      </a>
    </div>
    <div class="section" ref="sec">
      <ul>
        <li @click="sortEvt(1)">
          <span>综合排序</span>
        </li>
        <li>
          <span>好评优先</span>
        </li>
        <li>
          <span>销量最高</span>
        </li>
        <li>
          <span>起送价最低</span>
        </li>
        <li>
          <span>配送最快</span>
        </li>
        <li>
          <span>配送费最低</span>
        </li>
        <li>
          <span>人均从低到高</span>
        </li>
        <li>
          <span>人均从高到低</span>
        </li>
        <li>
          <span>通用排序</span>
        </li>
      </ul>
    </div>
    <div class="xuan" ref="xuan">
      <div class="item">
        <h2>商家服务(可多选)</h2>
        <div class="item-box" ref="itemBox1">
          <div class="box" @click="ClickBox1($event)" id="1">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox1($event)" id="2">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox1($event)" id="3">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox1($event)" id="4">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox1($event)" id="5">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
        </div>
      </div>
      <div class="item">
        <h2>商家服务(可多选)</h2>
        <div class="item-box" ref="itemBox2">
          <div class="box" @click="ClickBox2($event)" id="1">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox2($event)" id="2">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox2($event)" id="3">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox2($event)" id="4">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox2($event)" id="5">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox2($event)" id="6">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox2($event)" id="7">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox2($event)" id="8">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
        </div>
      </div>
      <div class="item">
        <h2>商家服务(可多选)</h2>
        <div class="item-box" ref="itemBox3">
          <div class="box" @click="ClickBox3($event)" id="1">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox3($event)" id="2">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox3($event)" id="3">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox3($event)" id="4">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
          <div class="box" @click="ClickBox3($event)" id="5">
            <span></span>
            <span>蜂鸟专送</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <span @click="clearEvt">清空</span>
        <span @click="identityEvt">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sort",
  data: function() {
    return {};
  },
  created: function() {},
  methods: {
    // 综合排序点击
    SortEvt() {
      window.scroll({
        top: 323
        // behavior:'smooth'
      });
      // document.documentElement.style.overflow='hidden';
      if (getComputedStyle(this.$refs.sec).display == "none") {
        this.$refs.xuan.style.display = "none";
        this.$refs.sec.style.display = "block";
        this.$parent.markOpen();
      } else {
        this.$parent.markClose();
        this.$refs.sec.style.display = "none";
      }
    },
    // 距离最近点击
    DistanceEvt() {},
    // 品质联盟点击
    QuantityEvt() {},
    // 筛选点击
    ShaixuanEvt() {
      window.scroll({
        top: 323
        // behavior:'smooth'
      });
      let xuan = this.$refs.xuan;
      if (getComputedStyle(xuan).display == "none") {
        this.$refs.sec.style.display = "none";
        xuan.style.display = "block";
        this.$parent.markOpen();
      } else {
        this.$parent.markClose();
        xuan.style.display = "none";
      }
    },
    // close
    sectionClose() {
      let section = this.$refs.sec;
      let xuan = this.$refs.xuan;

      section.style.display = "none";
      xuan.style.display = "none";
    },
    sortEvt(id) {
      this.$parent.selecteEvt();
      this.$parent.markEvt();
    },
    // clearEvt
    clearEvt() {
      let itemBox1 = this.$refs.itemBox1.children;
      let itemBox2 = this.$refs.itemBox2.children;
      let itemBox3 = this.$refs.itemBox3.children;
      for(let i=0; i<itemBox1.length; i++){
        itemBox1[i].classList.remove('selected');
      }
      for(let i=0; i<itemBox2.length; i++){
        itemBox2[i].classList.remove('selected');
      }
      for(let i=0; i<itemBox3.length; i++){
        itemBox3[i].classList.remove('selected');
      }
      
    },
    // identityEvt
    identityEvt() {},
    ClickBox1: function(ev) {
      let id = ev.currentTarget.id;
      let list = ev.currentTarget.parentElement.children;   
      for(let i=0; i<list.length; i++){
        list[i].classList.remove('selected');
      }
      ev.currentTarget.classList.add('selected');
    },
    ClickBox2: function(ev) {
      let id = ev.currentTarget.id;
      ev.currentTarget.classList.add('selected')
    },
    ClickBox3: function(ev) {
      let id = ev.currentTarget.id;
      ev.currentTarget.classList.add('selected')
    }
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a,
a:hover,
a:focus {
  text-decoration: none;
  color: #000;
}
ul,
ol {
  list-style: none;
}
.SortBar {
  position: relative;
  background-color: #fff;
  font-size: 0.14rem;
  color: #000;
  width: 100%;
}
.sort {
  background-color: #fff;
  color: #000;
  font-size: 0.14rem;
  width: 100%;
  // height: 0.4rem;
  display: flex;
  .item {
    flex: 1;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    color: #999;
    .iconfont {
      font-size: 0.12rem;
    }
  }
}
// 综合排序
.section {
  display: none;
  width: 100%;
  ul {
    padding: 0.04rem 0rem 0.06rem;
    overflow: hidden;
    width: 100%;
    li {
      width: 100%;
      padding-left: 0.2rem;
      height: 0.4rem;
      line-height: 0.4rem;
    }
  }
}
// 筛选
.xuan {
  display: none;
  width: 100%;

  .item {
    padding: 0.1rem 0rem;
    padding: 0rem 0.1rem;
    h2 {
      font-size: 0.12rem;
      color: #999;
      font-weight: 400;
      margin-bottom: 0.07rem;
    }
    .item-box {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .box {
        height: 0.3rem;
        background-color: #fafafa;
        font-size: 0.12rem;
        color: #333;
        text-align: center;
        line-height: 0.3rem;
        flex-basis: 31.33%;
        margin: 0.035rem;
      }
    }
  }
}
.footer {
  // display: none;
  display: flex;
  height: 0.4rem;
  width: 100%;
  border-top: 1px solid #eee;
  box-shadow: 0 -0.01rem 0.05rem 0.005rem #eee;
  span {
    display: inline-block;
    text-align: center;
    line-height: 0.4rem;
    flex: 1;
    &:last-of-type {
      background-color: #00d762;
      color: #fff;
    }
  }
}
.selected{
  background-color: #edf5ff !important;
  color: #3190e8 !important;
}
</style>