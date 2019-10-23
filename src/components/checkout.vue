<template>
  <div class="checkout">
    <div v-show="!flag">
      <!-- header -->
      <header class="hd">
        <span class="iconfont icon-shangyiye" @click.stop='shangyiye'></span>
        确认订单
      </header>
      <!--  -->
      <div class="bd">
        <section class="add">
          <span class="title">订单配送至</span>
          <h3>{{$store.state.location}}</h3>
          <p class="info">
            <span>{{$store.state.user.name}}</span>
            <span>{{$store.state.user.phone}}</span>
          </p>
        </section>
        <div class="time">
          <p>
            <span>送达时间</span>
            <span>尽快送达</span>
            <span class="iconfont icon-next"></span>
          </p>
        </div>
        <div class="time">
          <p class="p">
            <span>支付方式</span>
            <span>在线支付</span>
          </p>
        </div>
        <!-- detail -->
        <div class="detail">
          <div class="item">
            <p class="storename">
              快乐番薯
              <span>(韶关学院店)</span>
            </p>
          </div>
          <ul>
            <li v-for="item in list" :key="item.id">
              <div class="img">
                <img :src="item.imgpath" alt />
              </div>
              <div class="box">
                <p>{{item.name}}</p>
                <!-- <p>常规糖少冰</p> -->
              </div>
              <span>{{item.num}}</span>
              <span>¥{{item.TotalPrice}}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span class="bao">包装</span>
              <span class="he">餐盒</span>
              <p>¥2</p>
            </li>
            <li>
              <span class="bao shang">商家</span>
              <span class="he">配送费</span>
              <p>
                <del>¥1</del> ¥2
              </p>
            </li>
            <li>
              <span class="bao">新客</span>
              <span class="he">门店新客立减</span>
              <p class="red">- ¥2</p>
            </li>
            <li>
              <span class="he redpicket">红包</span>
              <p>
                <span>0个红包可用</span>
                <span class="iconfont icon-next"></span>
              </p>
            </li>
          </ul>
          <div class="total">
            <span>优惠说明</span>
            <p>
              <span>小计</span>
              <span ref="aa">¥20</span>
            </p>
          </div>
        </div>
      </div>
      <div class="other">
        <div class="item" @click.stop="openEvt">
          <span class="font">餐具分数</span>
          <div>
            <div ref="selected">
              <span>未选择</span>
              <p>选无需餐具，马上助力环保</p>
            </div>
            <span class="iconfont icon-next"></span>
          </div>
        </div>
        <a @click.stop.prevent="orderEvt">
          <span class="font" ref="cha">订单备注</span>
          <span class="iconfont icon-next"></span>
          <p>
            <span>口味、偏好</span>
          </p>
        </a>
        <a>
          <span class="font">发票信息</span>
          <p>
            <span>该店不支持线上开发票，请电话联系商户</span>
          </p>
        </a>
      </div>
      <div class="footer">
        <span ref="ab">¥11.8</span>
        <button>去支付</button>
      </div>
      <div class="pop" ref="pop">
        <p class="title">
          <span @click.stop="closeEvt">取消</span>
          <span>选择本次餐具</span>
          <span @click.stop="identityEvt">确定</span>
        </p>
        <div class="box">
          <mt-picker :slots="slots" @change="onValuesChange" ref="picker"></mt-picker>
        </div>
      </div>
    </div>
    <div class="note" v-show="flag">
      <div class="h">
        订单备注
        <span class="iconfont icon-shangyiye" @click.stop="retEvt"></span>
      </div>
      <div class="b">
        <div class="c">
          <textarea placeholder="填写备注信息" maxlength="120" v-model="inputVal"></textarea>
          <ul ref="list">
            <li>
              <span @click.stop="spanEvt2($event)">不要辣</span>|
              <span @click.stop="spanEvt2($event)">少点辣</span>|
              <span @click.stop="spanEvt2($event)">多点辣</span>
            </li>
            <li>
              <span @click.stop="spanEvt($event)">不要香菜</span>
            </li>
            <li>
              <span @click.stop="spanEvt($event)">不要洋葱</span>
            </li>
            <li>
              <span @click.stop="spanEvt($event)">多点醋</span>
            </li>
            <li>
              <span @click.stop="spanEvt($event)">多点葱</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="g">
        <button @click.stop.prevent="inputEvt">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "checkout",
  data() {
    return {
      list: [],
      slots: [
        {
          flex: 1,
          values: [
            "无需餐具",
            "1份",
            "2份",
            "3份",
            "4份",
            "5份",
            "6份",
            "7份",
            "8份",
            "9份",
            "10份",
            "10份以上"
          ],
          className: "slot1",
          textAlign: "center"
        }
      ],
      selected: "",
      flag: false,
      inputVal: "",
      str:[] //获取到标签内容
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.list = this.$store.getters.getList(this.$route.params.id);
    // console.log(this.list);
    this.$store.commit('clearGoods', this.$route.params.id)
    this.$store.commit('savecarData',{});
  },
  mounted() {
    this.price();
  },
  methods: {
    price() {
      var Total = 0;
      for (let i = 0; i < this.list.length; i++) {
        Total += Number(this.list[i].TotalPrice);
      }
      Total.toFixed(1);
      // if(this.flag == false){
      this.$refs.aa.innerText = "¥" + Total;
      this.$refs.ab.innerText = "¥" + Total;
      // }
    },
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      this.selected = values[0];
    },
    openEvt() {
      var picker = this.$refs.picker.$el;
      this.$refs.pop.style.display = "block";
      var target = picker.children[0].children[0].children[0].children[0];
      // // var el = document.createElement('div');
      // // target.style.height="72px";
      // target.innerHTML = '<p style="line-height:.12rem;">无需餐具 <br/><span style="font-size:.12rem; line-height:.12rem; color:#2fa28a">选无需餐具，马上助力环保</span></p>'
      // // console.log(target);
    },
    closeEvt() {
      this.$refs.pop.style.display = "none";
    },
    identityEvt() {
      this.$refs.selected.innerText = this.selected;
      this.$refs.selected.style.lineHeight = ".4rem";
      this.$refs.pop.style.display = "none";
    },
    orderEvt() {
      this.flag = true;
    },
    retEvt() {
      this.flag = false;
    },
    inputEvt() {
      // console.log(this.inputVal);
      var list = this.$refs.list.children;
      for(let i = 0; i< list.length; i++){
        for(let j=0; j<list[i].children.length; j++){
          if(list[i].children[j].style.color == "rgb(255, 255, 255)"){
            this.str.push(list[i].children[j].innerText);
          }
        }
      }
      // console.log(this.str);+ this.inputVal
      var s = this.str.join(',') ;
      var val = s +',' +this.inputVal;
      this.$refs.cha.innerText = val;

      this.retEvt();
    },
    spanEvt(el) {
      if (el.currentTarget.style.color != "rgb(255, 255, 255)") {
        el.currentTarget.style.backgroundColor = "#0186ff";
        el.currentTarget.style.color = "#fff";
      }else{
        el.currentTarget.style.backgroundColor = "#fff";
        el.currentTarget.style.color = "#333";
        
      }
    },
    spanEvt2(el) {
      var bor = el.currentTarget.parentElement.children;
      // console.log(bor);
      for(let i=0; i<bor.length; i++){
        bor[i].style.backgroundColor = "#fff";
        bor[i].style.color = "#333";;
      }
      if (el.currentTarget.style.color != "rgb(255, 255, 255)") {
        el.currentTarget.style.backgroundColor = "#0186ff";
        el.currentTarget.style.color = "#fff";
      }else{
        el.currentTarget.style.backgroundColor = "#fff";
        el.currentTarget.style.color = "#333";
      }
    },
    shangyiye(){
      this.$router.go(-1);
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
  color: #333;
}
ul,
ol {
  list-style: none;
}
.checkout {
  width: 100%;
  font-size: 0.14rem;
  color: #333;
  margin-bottom: 0.44rem;
}
// header
.hd {
  height: 0.44rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border: 0;
  color: #fff;
  font-size: 0.16rem;
  font-weight: 700;
  text-align: center;
  line-height: 0.44rem;
  z-index: 2;
  background: linear-gradient(90deg, #0af 0%, #0085ff 100%);
  span {
    position: absolute;
    left: 0.1rem;
    color: #fff;
  }
}
// bd
.bd {
  margin-top: 0.44rem;
  width: 100%;
  padding: 0.06rem;
  background-image: linear-gradient(
      0deg,
      #f5f5f5,
      #f5f5f5 65%,
      hsla(0, 0%, 96%, 0.3) 75%,
      hsla(0, 0%, 96%, 0)
    ),
    linear-gradient(270deg, #0085ff, #0af);
  // section
  .add {
    width: 100%;
    padding: 0.16rem 0rem 0.11rem;
    color: #fff;
    h3 {
      margin: 0.06rem 0rem;
    }
    p {
      font-size: 0.12rem;
      span {
        color: #fff;
        &:first-of-type {
          margin-right: 0.06rem;
        }
      }
    }
  }
  // time
  .time {
    padding: 0 0.2rem;
    position: relative;
    background-color: #fafafa;
    p {
      // position: relative;
      height: 0.5rem;
      line-height: 0.5rem;
      padding-right: 0.1rem;
      border-bottom: 1px solid #eee;
      .iconfont {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.14rem;
      }
      span {
        color: #333;
        &:nth-of-type(2) {
          float: right;
          color: #0085ff;
        }
        &:first-of-type {
          font-weight: 700;
        }
      }
    }
    &:last-of-type {
      p {
        border-bottom: 0;
        padding-right: 0;
        span {
          font-weight: 700;
        }
      }
    }
    .p {
      border: 0;
    }
  }
  // detail
  .detail {
    background-color: #fafafa;
    margin-top: 0.08rem;
    padding: 0 0.2rem;
    .item {
      height: 0.44rem;
      width: 100%;
      border-bottom: 1px solid #eee;
      line-height: 0.44rem;
      .storename {
        font-weight: 700;
        color: #333;
        span {
          font-weight: 400;
          font-size: 0.12rem;
          margin-left: 0.05rem;
        }
      }
    }
    ul {
      li {
        overflow: hidden;
        padding: 0.06rem 0rem;
        width: 100%;
        border-bottom: 1px solid #eee;
        .img {
          width: 0.36rem;
          height: 0.36rem;
          background-color: pink;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
          // margin: 0.04rem 0;
        }
        .box {
          float: left;
          // vertical-align: middle;
          p {
            line-height: 0.36rem;
            color: #333;
            margin-left: 0.06rem;
            width: 1.5rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &:last-of-type {
              font-size: 0.12rem;
              // line-height: 0.14rem;
            }
          }
        }
        span {
          line-height: 0.32rem;
          vertical-align: middle;
          &:last-of-type {
            float: right;
            font-size: 0.16rem;
          }
          &:first-of-type {
            font-size: 0.12rem;
          }
        }
        .bao {
          background-color: rgba(149, 168, 193, 0.14);
          padding: 0 0.03rem;
          border: 1px sloid #eee;
          line-height: 0.32rem;
        }
        .he {
          float: none !important;
          margin-left: 0.06rem !important;
          line-height: 0.32rem;
          font-size: 0.14rem !important;
        }
        > p {
          float: right;
          line-height: 0.32rem;
          > del {
            font-size: 0.12rem;
            margin-right: 0.06rem;
          }
          > span {
            &:first-of-type {
              background: linear-gradient(106deg, #ff7417, #ff3c15);
              color: #fff;
              padding: 0rem 0.03rem;
            }
          }
        }
        .shang {
          background-color: #60acf4;
        }
        .red {
          color: #ff4a07;
        }
        .redpicket {
          font-weight: 700;
        }
      }
    }
    .total {
      padding: 0.1rem 0rem;
      > span {
        color: #555;
        font-size: 0.12rem;
        line-height: 0.32rem;
      }
      > p {
        color: #333;
        float: right;
        line-height: 0.32rem;
        span {
          font-size: 0.14rem;
          &:last-of-type {
            font-size: 0.18rem;
            margin-left: 0.03rm;
            // font-weight: 700;
          }
        }
      }
    }
  }
}
// other
.other {
  margin-top: 0.06rem;
  background-color: #f5f5f5;
  overflow: hidden;
  margin-bottom: 0.06rem;
  > .item {
    padding: 0.1rem 0.16rem;
    border-bottom: 1px solid #eee;
    > div {
      float: right;
      text-align: right;
      height: 0.4rem;
      padding-right: 0.2rem;
      position: relative;
      p {
        font-size: 0.12rem;
        color: #0bb473;
      }
      .iconfont {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        font-size: 0.2rem;
      }
    }
  }
  .font {
    color: #333;
    font-weight: 700;
    font-size: 0.14rem;
    line-height: 0.4rem;
  }
  > a {
    padding: 0rem 0.2rem;
    display: block;
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #eee;
    > p {
      float: right;
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.12rem;
    }
    .iconfont {
      float: right;
      font-size: 0.2rem;
      color: #333;
    }
  }
}
// footer
.footer {
  height: 0.44rem;
  width: 100%;
  background: #3c3c3c;
  line-height: 0.44rem;
  position: fixed;
  bottom: 0;
  left: 0;
  span {
    color: #fff;
    margin-left: 0.1rem;
    font-size: 0.16rem;
  }
  button {
    width: 1.05rem;
    height: 100%;
    line-height: 100%;
    text-align: center;
    background-color: #00e067;
    float: right;
    border: 0;
    border-radius: 0;
    color: #fff;
  }
}
//
.pop {
  width: 100%;
  z-index: 3;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  display: none;
  .title {
    height: 0.56rem;
    line-height: 0.56rem;
    width: 100%;
    text-align: center;
    color: #333;
    font-weight: 700;
    font-size: 0.16rem;
    span {
      &:first-of-type {
        float: left;
        padding: 0 0.16rem;
        font-weight: 400;
        font-size: 0.14rem;
        color: #000;
      }
      &:last-of-type {
        float: right;
        padding: 0 0.16rem;
        font-weight: 400;
        font-size: 0.14rem;
        color: #000;
      }
    }
    > box {
      height: 2.2rem;
    }
  }
}
//
.note {
  .h {
    height: 0.44rem;
    width: 100%;
    background: linear-gradient(90deg, #0af, #0085ff);
    padding: 0rem 0.1rem;
    text-align: center;
    line-height: 0.44rem;
    color: #fff;
    font-weight: 700;
    font-size: 0.16rem;
    .iconfont {
      float: left;
    }
  }
  > .b {
    // padding: .16rem;
    margin-top: 0.1rem;
    background-color: #fff;
    .c {
      padding: 0.16rem;
      textarea {
        font-size: 0.14rem;
        color: #333;
        background-color: #fafafa;
        height: 1rem;
        padding: 0.16rem;
      }
      ul > {
        overflow: hidden;
        li {
          float: left;
          border: 1px solid #eee;
          margin: 0.05rem 0.05rem;
          span {
            padding: 0 0.03rem;
          }
        }
      }
    }
  }
  > .g {
    padding: 0.08rem 0.15rem;

    box-sizing: border-box;
    > button {
      height: 0.5rem;
      width: 100%;
      background-color: #00e067;
      color: #fff;
      font-size: 0.14rem;
      border: 0;
    }
  }
}
</style>