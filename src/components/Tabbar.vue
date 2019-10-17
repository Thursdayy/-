<template>
  <div >
    <mt-tabbar v-model="message" fixed class="bar">
      <mt-tab-item id="index">
        <span slot="icon" class="iconfont icon-home"></span>
        外卖
      </mt-tab-item>
      <mt-tab-item id="find">
        <span slot="icon" class="iconfont icon-faxian"></span>
        发现
      </mt-tab-item>
      <mt-tab-item id=order>
        <span slot="icon" class="iconfont icon-dingdan"></span>
        订单
      </mt-tab-item>
      <mt-tab-item id="me">
        <span slot="icon" class="iconfont icon-wode"></span>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  props:["selected"],
  data(){
    return {
      message: this.selected,
    }
  },
  created(){
    
  },
  watch:{
    message:function(val){
      // console.log(val);
      switch(val){
        case "index":
          this.$router.push("/");
          break;
        case "find":
          this.$router.push("/find");
          break;
        case "order":
          this.$router.push("/order");
          break;
        case "me":
          this.$router.push("/me");
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
a{
  color:#333;
}
.bar{
  z-index: 5 !important;
}
div{
  font-size: .14rem;
  .iconfont{
    font-size: .2rem;
    
  }
}

.mint-tabbar > .mint-tab-item.is-selected {
  background: transparent;
}
</style>