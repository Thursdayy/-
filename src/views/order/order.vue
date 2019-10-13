<template>
  <div class="order">
    这是订单页面
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
}
</style>