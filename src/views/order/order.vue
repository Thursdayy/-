<template>
  <div class="order">
    <!-- 顶部导航 -->
    <nav class="nav-head">
      <div class="nav">
        <div class="menun" @touchstart="menunEvt($event)" ref="menun">
          <a href="javascript:void(0);" id="nav#1">全部</a>
          <a href="javascript:void(0);" id="nav#2">待付款</a>
          <a href="javascript:void(0);" id="nav#3">待使用</a>
          <a href="javascript:void(0);" id="nav#4">待评价<span>(4)</span></a>
          <a href="javascript:void(0);" id="nav#5">退款/售后</a>
        </div>
        <span class="line" ref="line"></span>
      </div>
    </nav>
    <!-- 订单 -->
    <div class="container">
      <div class="item">
        <h4 class="item-head">
          味来烤肉饭(小新塘店)
        </h4>
        <!-- body -->
        <div class="item-body">
          <div class="img">
            <img src="../../images/order.png" alt="">
          </div>
          <div class="desc">
            <p>下单时间：<span>{{time}}</span></p>
            <p>总价：<span>{{price}}</span></p>
          </div>
        </div>
        <!-- footer -->
        <div class="item-footer">
          <button>再来一单</button>
        </div>
      </div>
      <div class="item">
        <h4 class="item-head">
          味来烤肉饭(小新塘店)
        </h4>
        <!-- body -->
        <div class="item-body">
          <div class="img">
            <img src="../../images/order.png" alt="">
          </div>
          <div class="desc">
            <p>下单时间：<span>{{time}}</span></p>
            <p>总价：<span>{{price}}</span></p>
          </div>
        </div>
        <!-- footer -->
        <div class="item-footer">
          <button>再来一单</button>
        </div>
      </div>
      <div class="item">
        <h4 class="item-head">
          味来烤肉饭(小新塘店)
        </h4>
        <!-- body -->
        <div class="item-body">
          <div class="img">
            <img src="../../images/order.png" alt="">
          </div>
          <div class="desc">
            <p>下单时间：<span>{{time}}</span></p>
            <p>总价：<span>{{price}}</span></p>
          </div>
        </div>
        <!-- footer -->
        <div class="item-footer">
          <button>再来一单</button>
        </div>
      </div>
      <div class="item">
        <h4 class="item-head">
          味来烤肉饭(小新塘店)
        </h4>
        <!-- body -->
        <div class="item-body">
          <div class="img">
            <img src="../../images/order.png" alt="">
          </div>
          <div class="desc">
            <p>下单时间：<span>{{time}}</span></p>
            <p>总价：<span>{{price}}</span></p>
          </div>
        </div>
        <!-- footer -->
        <div class="item-footer">
          <button>再来一单</button>
        </div>
      </div>
    </div>
    <mt-tabbar :selected = "selected"></mt-tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar.vue";
export default {
  name: 'order',
  components: {
    "mt-tabbar": Tabbar
  },
  data(){
    return {
      selected:"order",
      name:this.$store.state.user.name,
      time: '2020-05-07 17:51',
      price: '¥14.04',
      navId: 0
    }
  },
  mounted () {
    this.navId = 1
  },
  methods: {
    menunEvt (el) {
      let target = el.target
      let id = target.id.split('#')[1]
      this.navId = id
    }
  },
  watch: {
    navId: function(newval, oldval) {
      let line = this.$refs.line
      let menun = this.$refs.menun
      let child = menun.children[newval - 1]
      let width = child.offsetWidth
      line.style.width = width + 'px'
      line.style.left = child.offsetLeft + 'px'
    }
  }
}
</script>
<style lang="less" scoped>
.order{
  width: 100%;
  height: 100%;
  background-color: #F7F9F8;
  font-size: .14rem;
  position: relative;
  margin-bottom: .6rem;
}
.nav-head{
  height: .4rem;
  line-height: .4rem;
  box-sizing: border-box;
  background-color: #fff;
  .nav{
    padding: 0 .1rem;
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    .menun{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      // a{
      //   padding: 0 .08rem;
      // }
    }
    .line{
      display: inline-block;
      border-bottom: 3px solid #FDC800;
      position: absolute;
      bottom: .05rem;
      left: .1rem;
      transition: left 300ms ease;
    }
  }
}
// 订单
.container{
  width: 100%;
  padding: 0 .1rem;
  box-sizing: border-box;
  margin-bottom: .1rem;
  .item{
    background-color: #fff;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-top: .1rem;
    .item-head{
      height: .4rem;
      line-height: .4rem;
      border-bottom: 1px solid #eee;
      color: #333;
      font-size: .16rem;
      font-weight: 500;
    }
    .item-body{
      padding: .1rem 0;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      .img{
        width: .4rem;
        height: .4rem;
        border-radius: 10%;
        overflow: hidden;
        margin-right: .1rem;
        img{
          width: 100%;
        }
      }
    }
    .item-footer{
      padding: .1rem 0;
      overflow: hidden;
      button{
        padding: .05rem;
        border-radius: .1rem;
        float: right;
      }
    }
  }
}
</style>
