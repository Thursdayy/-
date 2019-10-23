<template>
  <div class="goodsinfo" ref="store" :id="head.id">
    <header class="hd" ref="head">
      <span class="iconfont icon-shangyiye" @click="clickBack"></span>
      <div class="storeimg">
        <img :src="head.logo" />
      </div>
    </header>
    <!-- head-title -->
    <div class="store">
      <h2>
        <span class="name">{{head.name}}</span>
        <span class="iconfont icon-next"></span>
      </h2>
      <!-- evaluate -->
      <p class="evaluate">
        <span>{{head.desc.evaluate}}</span>
        <span>{{head.desc.sell}}</span>
        <span>{{head.desc.delivery}}</span>
      </p>
      <!-- badge -->
      <div class="badge">
        <span class="badge-price">¥6</span>
        <span class="iconfont icon-huangguan"></span>
        <span class="menkan">无门槛</span>
        <span>领取</span>
        <span class="af"></span>
        <span class="be"></span>
      </div>
      <!-- discount -->
      <div class="store-dis">
        <ul class="discount">
          <li v-for="item in head.discount" :key="item.index">{{item.one}}</li>
        </ul>
        <button class="dis-btn">
          3个优惠
          <span class="iconfont icon-down"></span>
        </button>
      </div>
      <!-- store notice -->
      <p class="st-notice">{{head.notice}}</p>
    </div>
    <!-- container navbar -->
    <div class="bd">
      <div class="nav-box">
        <div ref="nav">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">
              <span>点餐</span>
            </mt-tab-item>
            <mt-tab-item id="2">
              <span>评价</span>
            </mt-tab-item>
            <mt-tab-item id="3">
              <span>商家</span>
            </mt-tab-item>
          </mt-navbar>
        </div>
      </div>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1" class="gl">
          <div class="store-recommond">
            <p>商家推荐</p>
            <!-- <div class="rec-swipe"> -->
            <div class="rec-swipe" ref="move">
              <ul
                ref="moveList"
                @touchstart="touchStart"
                @touchmove="touchMove"
                @touchend="touchEnd"
                :style="slideStyle"
              >
                <li>
                  <div class="img-box">
                    <img src="http://106.12.109.217:3000/www/images/goodsinfo/dc1.webp" />
                  </div>
                  <div class="item-box">
                    <p class="name">黑椒厚切牛扒饭+饮品</p>
                    <p class="item-sell">
                      <span>月售886份</span>
                      <span>好评率98%</span>
                    </p>
                    <p class="item-price">
                      <span>¥39.9</span>
                      <button>+</button>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <img src="http://106.12.109.217:3000/www/images/goodsinfo/dc1.webp" />
                  </div>
                  <div class="item-box">
                    <p class="name">黑椒厚切牛扒饭+饮品</p>
                    <p class="item-sell">
                      <span>月售886份</span>
                      <span>好评率98%</span>
                    </p>
                    <p class="item-price">
                      <span>¥39.9</span>
                      <button>+</button>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <img src="http://106.12.109.217:3000/www/images/goodsinfo/dc1.webp" />
                  </div>
                  <div class="item-box">
                    <p class="name">黑椒厚切牛扒饭+饮品</p>
                    <p class="item-sell">
                      <span>月售886份</span>
                      <span>好评率98%</span>
                    </p>
                    <p class="item-price">
                      <span>¥39.9</span>
                      <button>+</button>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <img src="http://106.12.109.217:3000/www/images/goodsinfo/dc1.webp" />
                  </div>
                  <div class="item-box">
                    <p class="name">黑椒厚切牛扒饭+饮品</p>
                    <p class="item-sell">
                      <span>月售886份</span>
                      <span>好评率98%</span>
                    </p>
                    <p class="item-price">
                      <span>¥39.9</span>
                      <button>+</button>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <img src="http://106.12.109.217:3000/www/images/goodsinfo/dc1.webp" />
                  </div>
                  <div class="item-box">
                    <p class="name">黑椒厚切牛扒饭+饮品</p>
                    <p class="item-sell">
                      <span>月售886份</span>
                      <span>好评率98%</span>
                    </p>
                    <p class="item-price">
                      <span>¥39.9</span>
                      <button>+</button>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <img src="http://106.12.109.217:3000/www/images/goodsinfo/dc1.webp" />
                  </div>
                  <div class="item-box">
                    <p class="name">黑椒厚切牛扒饭+饮品</p>
                    <p class="item-sell">
                      <span>月售886份</span>
                      <span>好评率98%</span>
                    </p>
                    <p class="item-price">
                      <span>¥39.9</span>
                      <button>+</button>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 商品 -->
          <div class="goods" ref="lf">
            <div class="main" ref="main">
              <div class="mui-content mui-row">
                <!-- 左边 -->

                <div class="mui-col-xs-3">
                  <div
                    id="segmentedControls"
                    class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical"
                  >
                    <a
                      class="mui-control-item"
                      v-for="item in list"
                      :key="item.index"
                      data-index="1"
                      href="#1"
                      ref="lOpt"
                    >
                      {{item.name}}
                      <span class="badge"></span>
                    </a>
                  </div>
                </div>

                <!-- 右边 -->
                <div id="segmentedControlContents" class="mui-col-xs-9 rg slider" ref="lis">
                  <div
                    v-for="item in list"
                    :key="item.index"
                    class="mui-control-content"
                    ref="rOpt"
                    id="1"
                  >
                    <div class="box">
                      <p class="title">
                        <span>{{item.name}}</span>
                        <span>{{item.title}}</span>
                      </p>
                      <ul>
                        <li v-for="it in item.info" :key="it.id">
                          <div class="img-box">
                            <img :src="it.imgpath" />
                          </div>
                          <div class="item-box">
                            <p class="item-title">{{it.name}}</p>
                            <p class="item-desc">{{it.main}}</p>
                            <p class="item-sell">
                              <span>{{it.sell}}</span>
                              <span>{{it.evaluate}}</span>
                            </p>
                            <p class="item-dis">
                              <span v-show="it.discount != '' " v-text="it.discount"></span>
                            </p>
                            <p class="item-price">
                              <span>{{it.price}}</span>
                              <del>{{it.delete}}</del>
                              <a class="lt" :id="it.id" ref="ab">
                                <button @click.self="addBtn($event)">+</button>
                                <span></span>
                                <button class="reduce" @click.self="reduceBtn($event)">—</button>
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ft" @click="popupShow">
            <div class="footer">
              <span class="iconfont icon-gouwuchekong" ref="car">
                <span class="carb" ref="ball">{{ftprice.num}}</span>
              </span>
              <div class="a">
                <p>
                  <span v-if="ftprice.num == 0">未选购商品</span>
                  <span v-if="ftprice.num != 0">¥{{ftprice.price.toFixed(1)}}</span>
                </p>
                <p>
                  <span>另需配送费</span>
                  <span></span>
                </p>
              </div>
              <a class="topay" ref="payBtn" @click.stop="topay">去结算</a>
            </div>
          </div>
          <div class="popup">
            <mt-popup
              v-model="popupVisible"
              position="bottom"
              class="pop"
              closeOnClickModal="true"
              modal="true"
            >
              <p class="selected">
                <span>已选商品</span>
                <span class="clear" @click.stop="clearEvt">清空</span>
              </p>
              <ul>
                <li class="list" v-for="item in showlist" :key="item.index" :id="item.id">
                  <span class="name">{{item.name}}</span>
                  <del class="delete">{{item.delete}}</del>
                  <span class="price" ref="price">{{item.TotalPrice}}</span>
                  <div class="left">
                    <span class="reduce" @click.stop="carReduce($event)" :id="item.index">—</span>
                    <span class="num">{{item.num}}</span>
                    <span class="add" @click.stop="carAdd($event)">+</span>
                  </div>
                </li>
              </ul>
            </mt-popup>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <evaluate :id="head.id" :Evselected="selected"></evaluate>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <storeinfo :id="head.id"></storeinfo>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import { GoodInfo } from "@/api/homeItems";
import evaluate from "./evaluate";
import storeinfo from "./storeInfo";
export default {
  name: "goodsInfo",
  data() {
    return {
      selected: "1",
      id: this.$route.params.id,
      originalX: 0,
      head: {
        desc: {},
        discount: [
          {
            info: [{}]
          }
        ]
      },
      list: [{}],
      // popupde 数据
      popupVisible: false,
      showlist: [],
      ftprice: {
        sid: this.$route.params.id,
        num: 0,
        price: 0
      },
      flag: false,
      starX: 0,
      endX: 0,
      slideStyle: {
        left: 0,
        transition: "none"
      }
    };
  },
  created() {
    // console.log(this.id)
    // window.removeEventListener('scroll', this.ScrollEvt);
    this.getData();
    window.addEventListener("scroll", this.ScrollEvt, false);
  },
  mounted() {
    setTimeout(() => {
      this.getAllData(this.id);
      // console.log(this.showlist);
      // this.ftprice = this.$store.getters.getcarData;
      // console.log(this.$store.getters.getcarData);

      var l = this.$store.getters.getcarData;
      if (l.num != undefined) {
        this.ftprice = l;
        this.ftClickEvt();
      }
    }, 500);
  },
  destroyed() {
    window.removeEventListener("scroll", this.ScrollEvt);
  },
  methods: {
    touchStart: function(ev) {
      ev = ev || event;
      ev.preventDefault();
      this.flag = true;
      this.starX = ev.touches[0].clientX;
      this.endX = this.$refs.moveList.offsetLeft;
      this.slideStyle.transition = "none";
    },
    touchMove: function(ev) {
      ev = ev || event;
      ev.preventDefault();
      var moveX = this.endX + (ev.touches[0].clientX - this.starX);
      // if(Math.abs(moveX) > = this.$refs)
      // console.log(moveX)
      if (moveX < 0 && moveX > -414) {
        this.slideStyle.left = moveX + "px";
      } else {
        // this.slideStyle.left = moveX + "px";
      }
    },
    touchEnd: function(ev) {},
    // 滚动事件
    ScrollEvt() {
      let top = window.pageYOffset;
      // console.log(top);
      if (top > 262) {
        this.$refs.nav.style.position = "fixed";
        this.$refs.nav.style.width = "100%";
        this.$refs.nav.style.top = 0;
        this.$refs.nav.style.left = 0;
        this.$refs.nav.style.zIndex = 2;
      } else {
        this.$refs.nav.style.position = "";
      }
      if (top >= 463) {
        this.$refs.lis.classList.remove("slider");
      } else {
        this.$refs.lis.classList.add("slider");
      }
      // if (top > 515) {
      //   this.$refs.lf.style.position = "fixed";
      //   this.$refs.lf.style.top = "50px";
      //   this.$refs.lf.style.left = "0";
      //   // this.$refs.gl.$el.style.zIndex = 2;
      // }
      // console.log(top);
    },
    // 获取数据
    getData: function() {
      // console.log(this.$route.params.id);
      GoodInfo(this.$route.params.id)
        .then(res => {
          if (res.status == 200) {
            this.head = res.data.head;
            this.list = res.data.list;
            for (var i = 0; i < this.list.length; i++) {
              this.list[i].num = 0;
              for (var j = 0; j < this.list[i].info.length; j++) {
                this.list[i].info[j].num = 0;
              }
            }
            this.setbg();
            setTimeout(() => {
              this.leftOpt();
              this.rightOpt();
            }, 1000);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 设置页面头部背景
    setbg: function() {
      this.$refs.head.style.backgroundImage = "url(" + this.head.imgpath + ")";
    },
    // 商品左边锚点
    leftOpt: function() {
      var lList = this.$refs.lOpt;
      lList[0].classList.add("mui-active");
      for (var i = 0; i < lList.length; i++) {
        lList[i].href = "#content" + (i + 1);
        lList[i].setAttribute("data-index", i + 1);
      }
    },
    // 商品右边锚点
    rightOpt: function() {
      var rList = this.$refs.rOpt;
      rList[0].classList.add("mui-active");
      for (var i = 0; i < rList.length; i++) {
        // rList[i].name = "content" + (i + 1);
        rList[i].setAttribute("name", "#content" + (i + 1));
        rList[i].id = "#content" + (i + 1);
      }
    },
    // 点击添加按钮
    addBtn: function(el) {
      var Id;
      var storeId = this.$refs.store.id; //店铺id
      var goodId = el.target.parentElement.id; //商品的id
      var index = parseInt((goodId - 1) / 6);
      if (goodId > 6) {
        Id = goodId - 6;
      } else {
        Id = goodId;
      }

      // console.log(this.storeId);
      var goodList = this.list[index].info[Id - 1];
      goodList.storeId = storeId;
      this.$store.commit("addGoodsCount", goodList);
      // 获取最新数据
      this.getGoodsCount({ storeId: storeId, id: goodId });
      // this.getPopupData();
      this.ftprice.num++;
      // console.log(goodList.price.substr(1));
      this.ftprice.price =
        this.ftprice.price + Number(goodList.price.substr(1));
      this.ftprice.price = this.ftprice.price;
      // 动画
      if (this.ftprice.num == 1) {
        this.ftClickEvt();
      }
    },
    // 减按钮
    reduceBtn: function(el) {
      var storeId = this.$refs.store.id; //店铺id
      var goodId = el.target.parentElement.id; //商品的id
      var index = parseInt((goodId - 1) / 6);
      var goodList = this.list[index].info[goodId - 1];
      this.$store.commit("reduceGoodsCount", {
        storeId: storeId,
        goodId: goodId
      });
      // 获取最新数据
      this.getGoodsCount({ storeId: storeId, id: goodId });
      this.ftprice.num--;
      this.ftprice.price -= Number(goodList.price.substr(1));
      // 购物车动画
      if (this.ftprice.num == 0) {
        this.carClear();
      }
    },
    getGoodsCount: function(obj) {
      var retObj = this.$store.getters.getCount(obj);
      var as = this.$refs.ab;
      var bs = this.$refs.lOpt;
      var index = parseInt((obj.id - 1) / 6);
      if (retObj.count == 0) {
        as[obj.id - 1].children[2].style.display = "none";
        as[obj.id - 1].children[1].innerText = " ";
        if (retObj.Total == 0) {
          bs[index].children[0].style.display = "none";
          bs[index].children[0].innerText = " ";
        } else {
          bs[index].children[0].style.display = "block";
          bs[index].children[0].innerText = retObj.Total;
        }
      } else {
        as[obj.id - 1].children[2].style.display = "block";
        as[obj.id - 1].children[1].innerText = retObj.count;
        bs[index].children[0].style.display = "block";
        bs[index].children[0].innerText = retObj.Total;
      }
    },
    // 购物车动画
    ftClickEvt: function() {
      this.$refs.car.style.transform = "scale(.8)";
      this.$refs.car.style.backgroundColor = "#3190e8";
      this.$refs.car.style.color = "#fff";
      this.$refs.payBtn.style.backgroundColor = "#38ca73";
      this.$refs.car.children[0].style.display = "block";
      setTimeout(() => {
        this.$refs.car.style.transform = "scale(1)";
      }, 500);
    },
    // 购物车清空效果
    carClear: function() {
      this.$refs.car.children[0].style.display = "none";
      this.$refs.car.style.backgroundColor = "rgba(61, 61, 63, 0.9)";
      this.$refs.payBtn.style.backgroundColor = "rgba(61,61,63,1)";
    },
    // 点击清空
    clearEvt: function() {
      this.carClear();
      // console.log(this.showlist);
      this.$store.commit("clearGoods", 1);
      this.showlist = [];
      this.getAllData(this.$refs.store.id);
    },
    // popupshow
    popupShow: function() {
      this.getPopupData();
      this.popupVisible = !this.popupVisible;
      // console.log(this.showlist[0].TotalPrice);
    },
    // 获取数据并渲染
    getPopupData: function() {
      var storeid = this.$refs.store.id;
      this.showlist = this.$store.getters.getList(storeid);
    },
    // shopcar add
    carAdd: function(event) {
      let id = event.target.parentElement.parentElement.id;
      for (let i = 0; i < this.showlist.length; i++) {
        if (this.showlist[i].id == id) {
          let obj = this.showlist[i];
          delete obj.TotalPrice;
          console.log(obj);
          this.$store.commit("addGoodsCount", obj);
        }
      }
      this.getPopupData();
      this.getAllData(this.$refs.store.id);
    },
    // shop car reduce
    carReduce: function(event) {
      let id = event.target.parentElement.parentElement.id;
      for (let i = 0; i < this.showlist.length; i++) {
        if (this.showlist[i].id == id) {
          var p = this.showlist[i].price;
          let sid = this.showlist[i].storeId;
          this.$store.commit("reduceGoodsCount", {
            storeId: sid,
            goodId: id
          });
        }
      }
      this.getPopupData();
      this.getAllData(this.$refs.store.id);
      this.ftprice.num--;
      this.ftprice.price -= Number(p.substr(1));
      // 购物车动画
      if (this.ftprice.num == 0) {
        this.carClear();
      }
    },
    // get all data of store
    getAllData: function(id) {
      var allData = this.$store.getters.getList(id);
      var as = this.$refs.ab;
      var bs = this.$refs.lOpt;
      // console.log(allData);
      if (allData == 0) {
        for (let i = 0; i < as.length; i++) {
          (as[i].children[1].innerText = ""),
            (as[i].children[2].style.display = "none");
        }
        for (let i = 0; i < bs.length; i++) {
          bs[i].children[0].style.display = "none";
        }
      } else {
        for (let i = 0; i < as.length; i++) {
          (as[i].children[1].innerText = ""),
            (as[i].children[2].style.display = "none");
        }
        for (let i = 0; i < allData.length; i++) {
          let id = allData[i].id;
          as[id - 1].children[1].innerText = allData[i].num;
          as[id - 1].children[2].style.display = "block";
        }
        // zuobian
        let counts = 0;
        for (let i = 0; i < bs.length; i++) {
          for (let j = 0; j < allData.length; j++) {
            if (parseInt((allData[j].id - 1) / 6) == i) {
              counts += allData[j].num;
              bs[i].children[0].style.display = "block";
              bs[i].children[0].innerText = counts;
            }
          }
        }
      }
    },
    // go back
    clickBack: function() {
      this.$router.go(-1);
    },
    topay() {
      var user = this.$store.getters.getUser;
      if (user.name == "登录/注册") {
        this.$router.push({ name: "login", params: {} });
      } else {
        if (this.ftprice.num !== 0) {
          this.$router.push({ name: "checkout", params: { id: this.id } });
        }
      }
    }
  },
  watch: {
    "ftprice.num": function() {
      this.$store.commit("savecarData", this.ftprice);
    }
  },
  components: {
    evaluate: evaluate,
    storeinfo: storeinfo
  }
};
</script>
<style lang="less" scoped>
.goodsinfo {
  font-size: 0.14rem;
  background-color: #fff;
}
.gl {
  margin-bottom: 0.48rem;
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
  color: #333;
  text-decoration: none;
}
ol,
ul {
  list-style: none;
}
// head
.hd {
  width: 100%;
  height: 1rem;
  // background-color: lightgreen;
  position: relative;
  background-position: center center;
  background-size: contain;
  .icon-shangyiye {
    font-size: 0.24rem;
    color: #fff;
    position: absolute;
    left: 0.08rem;
    top: 0.05rem;
  }
  .storeimg {
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    // background-color: orange;
    bottom: -0.1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.nav-box {
  width: 100%;
  height: 0.5rem;
}
// store name
.store {
  margin-top: 0.3rem;
  background-color: #fff;
  > h2 {
    width: 2.47rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 auto;
    position: relative;
    font-size: 0.2rem;
    .icon-next {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
  .evaluate {
    text-align: center;
    span {
      margin-right: 0.05rem;
      font-size: 0.12rem;
    }
  }
  // badge
  .badge {
    width: 1.44rem;
    height: 0.24rem;
    background-color: #ffe578;
    margin: 0 auto;
    margin-top: 0.05rem;
    font-size: 0.12rem;
    padding-left: 0.2rem;
    line-height: 0.24rem;
    position: relative;
    .icon-huangguan {
      font-size: 0.12rem;
    }
    .badge-price {
      margin-right: 0.15rem;
      font-size: 0.16rem;
      font-weight: 700;
    }
    .menkan {
      margin-right: 0.15rem;
    }
    .af,
    .be {
      width: 0.06rem;
      height: 0.06rem;
      background-color: #fff;
      border-radius: 50%;
      display: block;
      position: absolute;
      right: 0.3rem;
    }
    .af {
      bottom: -0.025rem;
    }
    .be {
      top: -0.025rem;
    }
  }
}
// store discount
.store-dis {
  width: 100%;
  height: 0.42rem;
  // background-color: lightgreen;
  padding: 0.12rem 0.375rem 0rem 0.375rem;
  .discount {
    width: 2.3rem;
    height: 0.3rem;
    float: left;
    overflow: hidden;
    li {
      float: left;
      font-size: 0.12rem;
      margin: 0rem 0.025rem;
      padding: 0rem 0.04rem;
      border: 1px solid red;
      color: red;
    }
  }
  .dis-btn {
    font-size: 0.12rem;
    color: #999;
    .icon-down {
      font-size: 0.12rem;
    }
  }
}
// store notice
.st-notice {
  margin: 0rem 0.375rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.12rem;
  color: #999;
}
// bd
.bd {
  //navbar
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 333;
  }
  .mint-navbar {
    border-bottom: 1px solid #eee;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border: 0;
    color: #000;
    span {
      border-bottom: 2px solid #26a2ff;
      font-weight: 700;
      padding-bottom: 0.12rem;
    }
  }
  .mint-tab-item-label {
    font-size: 0.16rem;
    span {
      font-size: 0.16rem;
    }
  }
  //container
  .clearfix:after,
  .clearfix:before {
    /*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: " ";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .badge {
    position: absolute;
    width: 0.15rem;
    height: 0.15rem;
    display: none;
    top: 0;
    right: 0;
    border-radius: 50%;
    background-color: red;
    color: #fff;
    font-size: 0.12rem;
    line-height: 0.15rem;
    text-align: center;
  }
  .mint-tab-container {
    .store-recommond {
      padding-top: 0.16rem;
      > p {
        margin-left: 0.16rem;
        margin-bottom: 0.1rem;
        font-size: 0.16rem;
        font-weight: 700;
      }
      .rec-swipe {
        width: 100%;
        height: 2.04rem;
        position: relative;
        ul {
          width: 7.96rem;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          // background-color: lightgreen;
          overflow: hidden;
          li {
            width: 1.2rem;
            height: 2.04rem;
            padding-bottom: 0.16rem;
            margin-left: 0.1rem;
            float: left;
            &:first-of-type {
              margin-left: 0.16rem;
            }
            .img-box {
              width: 1.2rem;
              height: 1.2rem;
              background-color: pink;
              border-radius: 0.05rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .item-box {
              margin-top: 0.07rem;
              overflow: hidden;
              .name {
                font-size: 0.14rem;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height: 0.18rem;
              }
              .item-sell {
                overflow: hidden;
                line-height: 0.18rem;
                span {
                  font-size: 0.12rem;
                  color: #999;
                  &:first-of-type {
                    margin-right: 0.05rem;
                  }
                }
              }
              .item-price {
                line-height: 0.18rem;
                span {
                  font-size: 0.16rem;
                  color: #ff5339;
                  font-weight: 700;
                }
                button {
                  float: right;
                  width: 0.22rem;
                  height: 0.22rem;
                  background-color: #2396ff;
                  border: 0rem;
                  font-size: 0.24rem;
                  font-weight: 700;
                  color: #fff;
                  border-radius: 50%;
                  line-height: 0.22rem;
                }
              }
            }
          }
        }
      }
    }
    .main {
      background-color: #fff;
      position: relative;
      width: 100%;
      // height: 10rem;
      overflow-y: auto;
      .mui-row {
        // overflow: hidden;
        // border: 0px solid transparent;
        // position: absolute;
        top: 0;
        left: 0;
      }
      .mui-control-item {
        position: relative;
      }
      .mui-segmented-control .mui-control-item {
        width: 0.77rem;
        height: 0.48rem;
        padding: 0 0.075rem;
        // white-space: pre-wrap;
        overflow: hidden;
        // line-height: 0.14em;
        font-size: 0.12rem;
      }
      .mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical
        .mui-control-item {
        border-bottom: 0rem;
        background-color: #f8f8f8;
      }
      .mui-content {
        background-color: #fff;
      }
      .mui-segmented-control.mui-segmented-control-inverted
        .mui-control-item.mui-active {
        color: #333;
        background-color: #fff;
      }
      .box {
        // height: 0.6rem;
        width: 100%;
        .title {
          margin: 0.03rem 0rem;
          span {
            font-size: 0.12rem;
            &:first-of-type {
              color: #000;
              margin-right: 0.03rem;
            }
            &:last-of-type {
              color: #999;
            }
          }
        }
        > ul {
          > li {
            margin: 0.1rem 0rem;
            overflow: hidden;
            .img-box {
              width: 0.95rem;
              height: 0.95rem;
              background-color: pink;
              float: left;
              margin-right: 0.1rem;
              > img {
                width: 100%;
                height: 100%;
              }
            }
            .item-box {
              height: 0.95rem;
              width: calc(100% - 1.05rem);
              float: right;
              overflow: hidden;
              font-size: 0.12rem;
              padding-right: 0.15rem;
              .item-title {
                font-size: 0.14rem;
                color: #000;
                font-weight: 700;
                line-height: 0.18rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              .item-desc {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.12rem;
                line-height: 0.18rem;
              }
              .item-sell {
                font-size: 0.12rem;
                line-height: 0.18rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                span {
                  &:first-of-type {
                    margin-right: 0.05rem;
                  }
                }
              }
              .item-dis {
                font-size: 0.12rem;
                line-height: 0.18rem;
                span {
                  border: 0.01rem solid #ff5339;
                  padding: 0rem 0.03rem;
                  color: #ff5339;
                }
              }
              .item-price {
                font-size: 0.12rem;
                span {
                  &:first-of-type {
                    font-size: 0.14rem;
                    color: #ff5339;
                    margin-right: 0.05rem;
                  }
                }
                .lt {
                  float: right;
                  button {
                    float: right;
                    width: 0.22rem;
                    height: 0.22rem;
                    border-radius: 50%;
                    border: 0rem;
                    background-color: #2396ff;
                    color: #fff;
                    font-size: 0.24rem;
                    line-height: 0.22rem;
                    font-weight: 700;
                  }
                  span {
                    margin: 0 0.05rem;
                  }
                  .reduce {
                    float: left;
                    width: 0.22rem;
                    height: 0.22rem;
                    border-radius: 50%;
                    border: 0rem;
                    background-color: #2396ff;
                    color: #fff;
                    font-size: 0.12rem;
                    line-height: 0.22rem;
                    font-weight: 700;
                    display: none;
                  }
                }
              }
            }
          }
        }
      }
      .mui-control-item {
        margin: 0rem !important;
      }
      .mui-col-xs-9,
      .mui-col-xs-3 {
        // overflow: hidden;
        overflow-y: auto;
      }
      .mui-control-content {
        display: block;
      }
    }
  }
}

.ft {
  position: fixed;
  z-index: 111;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9999999999999;
  .footer {
    height: 0.48rem;
    width: 100%;
    background-color: rgba(61, 61, 63, 0.9);
    position: relative;
    padding-left: 0.8rem;
    .icon-gouwuchekong {
      position: absolute;
      display: block;
      width: 0.5rem;
      height: 0.5rem;
      border: 0.05rem solid rgba(61, 61, 63, 0.9);
      border-radius: 50%;
      top: -0.1rem;
      left: 0.15rem;
      font-size: 0.26rem;
      color: #999;
      line-height: 0.4rem;
      text-align: center;
      background-color: rgba(61, 61, 63, 0.9);
      transition: all 0.5s ease;
    }
    .carb {
      position: absolute;
      top: -0.05rem;
      right: -0.07rem;
      width: 0.15rem;
      height: 0.15rem;
      display: block;
      border-radius: 50%;
      background-color: red;
      display: none;
      font-size: 0.12rem;
      color: #fff;
      line-height: 0.15rem;
      text-align: center;
    }
    p {
      font-size: 0.12rem;
      color: #999;
    }
    .a {
      float: left;
    }
    .topay {
      width: 1.05rem;
      height: 0.48rem;
      display: block;
      float: right;
      // background-color: #38ca73;
      background-color: rgba(61, 61, 63, 1);
      color: #fff;
      line-height: 0.48rem;
      text-align: center;
    }
  }
}
.popup {
  .pop {
    margin-bottom: 0.48rem;
    width: 100%;
    .selected {
      height: 0.4rem;
      width: 100%;
      line-height: 0.4rem;
      padding: 0rem 0.15rem;
      background-color: #eceff1;
      .clear {
        float: right;
      }
    }
    .list {
      width: 100%;
      height: 0.55rem;
      padding: 0.075rem 0.125rem;
      line-height: 0.55rem;
      line-height: 0.4rem;
      .left {
        float: right;
        .num {
          margin: 0rem 0.05rem;
        }
        .reduce,
        .add {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          display: inline-block;
          background-color: #2396ff;
          line-height: 0.2rem;
          text-align: center;
          font-weight: 700;
        }
        .add {
          color: #fff;
        }
        .reduce {
          background-color: #fff;
          color: #2396ff;
          border: 1px solid #2396ff;
        }
      }
      .name {
        display: inline-block;
        width: 1.6rem;
        overflow: hidden;
        white-space: nowrap;
        vertical-align: middle;
      }
      .price {
        margin-left: 0.05rem;
        font-size: 0.16rem;
        color: red;
      }
      .delete {
        margin-left: 0.2rem;
      }
    }
  }
}
.rg {
  height: 5.67rem;
}
.slider {
  overflow-y: hidden !important;
}
</style>