<template>
  <div class="food">
    <div style="height:.8rem">
      <div class="hd">
        <ul>
          <li @click.stop='sleEvt($event)'>全部</li>
          <li @click.stop='sleEvt($event)'>简餐便当</li>
          <li @click.stop='sleEvt($event)'>面食粥点</li>
          <li @click.stop='sleEvt($event)'>地方名菜</li>
          <li @click.stop='sleEvt($event)'>小吃炸串</li>
          <li @click.stop='sleEvt($event)'>香锅冒菜</li>
          <li @click.stop='sleEvt($event)'>日韩料理</li>
          <li @click.stop='sleEvt($event)'>汉堡披萨</li>
          <li @click.stop='sleEvt($event)'>轻食简餐</li>
        </ul>
        <div class="down iconfont icon-xiangxia" @click.stop="showEvt"></div>
      </div>
      <div class="fenlei" ref="feilei">
        <div class="fenlei-h">
          <h4>请选择分类</h4>
          <span class="iconfont icon-baseline-close-px" @click.stop="closeEvt"></span>
        </div>
        <div class="main">
          <ul class="slider-l" ref="sliderLeft">
            <li @click="LeftEvt($event)" id="1">
              <p>
                <span>美食</span>
                <span>1075</span>
              </p>
            </li>
            <li @click="LeftEvt($event)" id="2">
              <p>
                <span>快餐便当</span>
                <span>1075</span>
              </p>
            </li>
            <li>
              <p>
                <span>特色菜系</span>
                <span>1075</span>
              </p>
            </li>
            <li>
              <p>
                <span>全球美食</span>
                <span>1075</span>
              </p>
            </li>
            <li>
              <p>
                <span>小吃夜宵</span>
                <span>1075</span>
              </p>
            </li>
            <li>
              <p>
                <span>甜品饮品</span>
                <span>1075</span>
              </p>
            </li>
            <li>
              <p>
                <span>商店超市</span>
                <span>1075</span>
              </p>
            </li>
            <li>
              <p>
                <span>鲜花绿值</span>
                <span>1075</span>
              </p>
            </li>
            <li>
              <p>
                <span>医药健康</span>
                <span>1075</span>
              </p>
            </li>
            <li>
              <p>
                <span>早餐</span>
                <span>1075</span>
              </p>
            </li>
            <li>
              <p>
                <span>午餐</span>
                <span>1075</span>
              </p>
            </li>
          </ul>
          <div ref="sliderRight" class="box">
            <ul class="slider-r" id="1">
              <li class="active" @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>全部</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>小吃炸串</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>地方菜系</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>简餐便当</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>香锅冒菜</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>汉堡披萨</span>
                <span>1166</span>
              </li>
            </ul>
            <ul class="slider-r" id="2">
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>全部</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>其他快餐</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>米粉米线</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>盖浇饭</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>香锅冒菜</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>烧腊饭</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>粥店</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>麻辣烫</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>面馆</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>汉堡薯条</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>粉肠</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>煲仔饭</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>饺子</span>
                <span>1166</span>
              </li>
              <li @click.stop="sliderEvt($event)">
                <img src="../../images/img.webp" alt />
                <span>包子汤包</span>
                <span>1166</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav-bar">
        <mt-sort ref="sort" class="nav"></mt-sort>
      </div> 
    </div>
    <mt-gdList v-bind:good="indexid" ref="lis"></mt-gdList>
    <div class="mark" ref="mark"></div>
  </div>
</template>

<script>
import sort from "@/components/Sort.vue";
import gdList from "./GoodsList.vue";
export default {
  name: "food",
  data() {
    return {
      indexid: 1
    };
  },
  created() {
    console.log("id:" + this.$route.params.id);
  },
  mounted() {
    this.silerLEvt();
    this.sliderREvt();
  },
  destroyed() {
    // window.removeEventListener('scroll', this.scrollEvt);
    document.documentElement.style.overflow = "";
  },
  methods: {
    sliderEvt(ev){
      console.log('您点击了，但后台没有更多数据了～');
      this.closeEvt();
    },
    sleEvt(ev){
      var text = ev.currentTarget.innerText;
      console.log('您点击了:'+text+'选项，准备请求相关数据，刷新商品列表！')
      console.log('但并没请求，因为我的后台没准备好相应数据～');
    },
    silerLEvt() {
      var liFirst = this.$refs.sliderLeft.children[0];
      liFirst.classList.add("active");
    },
    sliderREvt() {
      var RLFirst = this.$refs.sliderRight.children[0];
      // console.log(RLFirst)
      RLFirst.style.display = "block";
    },
    LeftEvt(ev) {
      var id = ev.currentTarget.id;
      // console.log(id);
      for (let i = 0; i < 11; i++) {
        this.$refs.sliderLeft.children[i].classList.remove("active");
      }
      this.$refs.sliderLeft.children[id - 1].classList.add("active");
      for (let i = 0; i < 2; i++) {
        let RLFirst = this.$refs.sliderRight.children[i];
        RLFirst.style.display = "none";
      }
      this.$refs.sliderRight.children[id - 1].style.display = "block";
    },
    showEvt() {
      var feilei = this.$refs.feilei;
      feilei.style.display = "block";
    },
    closeEvt() {
      var feilei = this.$refs.feilei;
      feilei.style.display = "none";
    },
    markOpen() {
      this.$refs.mark.style.display = "block";
      document.documentElement.style.overflow = "hidden";
    },
    markClose() {
      this.$refs.mark.style.display = "none";
      document.documentElement.style.overflow = "";
    },
    //
    selecteEvt(el) {
      console.log('您点击了：' + el + '!' + '准备向服务器请求相关数据');
    },
    markEvt() {
      let mark = this.$refs.mark;
      if (getComputedStyle(mark).display == "none") {
        mark.style.display = "block";
        document.documentElement.style.overflow = "hidden";
      } else {
        mark.style.display = "none";
        document.documentElement.style.overflow = "";
        this.$refs.sort.sectionClose();
      }
    }
    // scrolEvt
    // ScrollEvt(){
    //   console.log('hello');
    //   var top = window.PageYOffset();
    //   console.log(top);
    // }
  },
  components: {
    "mt-sort": sort,
    "mt-gdList": gdList
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a,
a:hover,
a:focus {
  text-decoration: none;
  color: #333;
}
ul,
ol {
  list-style: none;
}
.food {
  // position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  color: #333;
  font-size: 0.14rem;
  // overflow-y: scroll;
}
html,
body {
  height: 100%;
  overflow: auto;
  margin: 0;
}
//
.hd {
  height: 0.4rem;
  width: 100%;
  background: linear-gradient(90deg, #0af 0%, #0085ff 100%);
  position: fixed;
  top: 0;
  // left: 0;
  display: flex;
  z-index: 5;
  // overflow-x: scroll;
  ul {
    margin-left: 0.15rem;
    // position: absolute;
    top: 0;
    left: 0;
    // overflow: hidden;
    // width: 10rem;
    overflow-x: scroll;
    white-space: nowrap;
    margin-right: 0.2rem;
    li {
      // float: left;
      display: inline-block;
      height: 0.4rem;
      line-height: 0.4rem;
      color: #fff;
      margin-right: 0.28rem;
    }
  }
  .down {
    width: 0.45rem;
    height: 0.4rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    background-color: #0085ff;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.2rem;
    color: #fff;
    box-shadow: -2px 0px 6px rgba(0, 0, 0, 0.1);
  }
}

// .nav {
//   position: absolute;
//   top:0;
//   left: 0;
//   z-index: 7;
// }
.nav-bar {
  position: fixed;
  width: 100%;
  top: 0.4rem;
  left: 0;
  background-color: #fff;
  z-index: 7;
}
.box {
  width: calc(100% - 1.3rem);
  background-color: #fff;
  overflow-y: scroll;
}
.fenlei {
  width: 100%;
  background-color: #fff;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  .fenlei-h {
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #f9f9f9;
    position: relative;
    padding: 0rem 0.15rem;
    span {
      position: absolute;
      top: 0;
      right: 0.15rem;
    }
    h4 {
      line-height: 0.4rem;
      font-size: 0.16rem;
    }
    .icon-baseline-close-px {
      font-size: 0.2rem;
      color: #555;
    }
  }
  //
  .main {
    width: 100%;
    height: 4rem;
    display: flex;
    // slider-l
    .slider-l {
      width: 1.3rem;
      height: 100%;
      overflow-y: scroll;
      background-color: #fafafa;
      li {
        // padding-left: .2rem;
        width: 100%;
        padding-right: 0.1rem;
        height: 0.48rem;
        line-height: 0.48rem;
        color: #555;
        > p {
          // display: flex;
          span {
            &:first-of-type {
              display: inline-block;
              width: 0.8rem;
              height: 0.2rem;
              line-height: 0.2rem;
              padding-left: 0.2rem;
              border-left: 0.03rem solid transparent;
            }
            &:last-of-type {
              // float:right;
              display: inline;
              border: 1px solid #eee;
              border-radius: 0.1rem;
              padding: 0 0.03rem;
            }
          }
        }
      }
      .active {
        background-color: #fff;
        p {
          span {
            &:first-of-type {
              border-left: 0.03rem solid #2395ff;
            }
          }
        }
      }
    }
    // slider-r
    .slider-r {
      // background-color: pink;
      // height: 1rem;
      // width: calc(100% - 1.3rem);
      padding: 0rem 0.15rem 0rem 0.21rem;
      overflow-y: scroll;
      display: none;
      li {
        height: 0.48rem;
        line-height: 0.48rem;
        // display: flex;
        img {
          width: 0.37rem;
          height: 0.37rem;
          // margin-top: .055rem;
          margin-right: 0.13rem;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
          color: #555;
          &:first-of-type {
            display: inline-block;
            line-height: 0.2rem;
            width: 1.2rem;
            font-size: 0.14rem;
          }
          &:last-of-type {
            // float: right;
            border: 1px solid #eee;
            font-size: 0.12rem;
            border-radius: 0.1rem;
            padding: 0rem 0.03rem;
          }
        }
      }
      .active {
        span {
          &:first-of-type {
            color: #2395ff;
          }
          &:last-of-type {
            background-color: #2395ff;
            color: #fff;
          }
        }
      }
    }
  }
}
// mark
.mark {
  width: 100%;
  height: 555rem;
  position: absolute;
  top: 0.4rem;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 2;
  display: none;
  overflow: hidden;
}
</style>