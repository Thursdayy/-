<template>
  <div class="order">
    <p class="title">此次饿了么练习项目，未实现订单管理页面的功能</p>
    <p>此次项目实现的有：</p>
    <p>页面的布局</p>
    <p>商品列表下拉预加载</p>
    <p>商品筛选组件</p>
    <p>地址定位与选择</p>
    <p>商品加购物车效果</p>
    <p>登录页面</p>
    <mt-tabbar :selected="selected"></mt-tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
export default {
  name: "order",
  components: {
    "mt-tabbar": Tabbar
  },
  data() {
    return {
      selected: "order"
    };
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
a:focus,
a:visited {
  color: #333;
  text-decoration: none;
}
.order {
  font-size: 0.14rem;
  position: fixed;
  padding: .1rem;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  .title{
    font-size: .16rem;
    color: #333;
  }
}
</style>