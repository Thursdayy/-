<template>
  <div>
    <div class="city">
      <header class="head">
        <p>
          <span class="iconfont icon-shangyiye" @click="retEvt"></span>城市选择
        </p>
        <div class="search">
          <span class="iconfont icon-sousuo"></span>
          <input placeholder="请输入城市名或者拼音" v-model="str"  @change='inputEvt'/>
        </div>
      </header>
      <!-- current location city -->
      <div class="currentCity">
        <p class="title">当前定位城市</p>
        <p class="CurrCity">广州</p>
      </div>
      <div class="citylist">
        <mt-index-list ref="list">
          <mt-index-section index="A">
            <mt-cell title="阿坝县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="阿巴嘎旗" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="阿坝藏族舞族自治州" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="阿尔山市" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="阿合奇县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="阿克塞哈萨克族自治县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="阿克苏市" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="阿克苏地区" @click.native="selectedEvt($event)"></mt-cell>
          </mt-index-section>
          <mt-index-section index="B">
            <mt-cell title="巴楚县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="巴东县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="白城市" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="百城县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="白朗县" @click.native="selectedEvt($event)"></mt-cell>
          </mt-index-section>
          <mt-index-section index="C">
            <mt-cell title="巴楚县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="巴东县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="白城市" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="百城县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="白朗县" @click.native="selectedEvt($event)"></mt-cell>
          </mt-index-section>
          <mt-index-section index="D">
            <mt-cell title="巴楚县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="巴东县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="白城市" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="百城县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="白朗县" @click.native="selectedEvt($event)"></mt-cell>
          </mt-index-section>
          <mt-index-section index="E">
            <mt-cell title="巴楚县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="巴东县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="白城市" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="百城县" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="白朗县" @click.native="selectedEvt($event)"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Z">
            <mt-cell title="长沙市" @click.native="selectedEvt($event)"></mt-cell>
            <mt-cell title="湛江市" @click.native="selectedEvt($event)"></mt-cell>
          </mt-index-section>
        </mt-index-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "city",
  data:function(){
    return {
      str:''
    }
  },
  created:function(){

  },
  mounted: function(){
    
  },
  methods:{
    // shang yi ye
    retEvt(){
      this.$emit('ret');
    },
    // input event
    inputEvt(){
      console.log(this.str);
    },
    selectedEvt(el){
      let ev = el.currentTarget;
      // let ev = el.target;
      let obj = ev.children[1].children[0].children[0];
      let title = obj.innerText;
      this.$store.commit('moditityAddress', title)
      
      this.retEvt();
    }
  }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
p{
  margin-bottom: 0;
}
a,
a:focus,
a:visited,
a:hover {
  text-decoration: none;
  color: #333;
}
ul,
li {
  list-style: none;
}
.city {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  position: fixed;
  color: #333;
  font-size: 0.14rem;
 
// header
.head {
  width: 100%;
  background-color: #fff;
  background: linear-gradient(90deg, #0af 0%, #0085ff 100%);
  padding: 0rem 0.15rem;
  p {
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: #fff;
    font-size: 0.16rem;
    position: relative;
    span {
      position: absolute;
      left: 0;
      font-size: 0.2rem;
    }
  }
  // search
  .search {
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    position: relative;
    padding: 0rem 0.3rem;
    input {
      width: 100%;
      margin-bottom: 0;
      border: 0;
      border-radius: 0.2rem;
      height: 0.3rem;
      padding-left: 0.3rem;
      font-size: 0.12rem;
    }
    span {
      position: absolute;
      left: 0.4rem;
    }
  }
}
// current location city
.currentCity {
  .title {
    width: 100%;
    height: 0.39rem;
    line-height: 0.39rem;
    padding: 0rem 0.15rem;
  }
  .CurrCity {
    width: 100%;
    height: 0.5rem;
    background-color: #fff;
    line-height: 0.5rem;
    padding: 0rem 0.15rem;
    color: #333;
  }
}
// city list
.citylist{
  width: 100%;
   margin-bottom: .55rem;
}
}
.mint-indexlist{
  ul{
    margin-right: 0 !important;
  }
    .mint-indexlist-nav{
    border: 0;
    background-color: transparent;
    color: #999;
  }
}

</style>