<template>
  <div style="overflow-y:hidden">
    <header class="head">
      <div class="location">
        <span class="iconfont icon-location"></span>
        <span >广州市</span>
        <span class="iconfont icon-down"></span>
      </div>
    </header>
    <!-- search -->
    <router-link to="" class="search" tag="div" ref="searchBox">
      <div class="search-box" >
        <span class="iconfont icon-sousuo"  ></span>
        <span>搜索饿了么商家、商品名称</span>
      </div>
    </router-link>
    <!-- grid -->
    <div class="grid">
      <router-link to="" tag="div" class="cell" v-for="item in itemList" :key="item.id">
        <div class="img-box">
          <img :src=item.imgpath>
        </div>
        <span v-text="item.name"></span>
      </router-link>
    </div>
    <!-- banner -->
    <div class="banner">
      <div class="banner-box">
        <p v-text="banner.title"></p>
        <p v-text="banner.desc"></p>
        <p v-text="banner.label"></p>
        <img class="banner-img" :src="banner.imgpath">
      </div>
    </div>
    <!-- title -->
    <div class="home-t">
      <p><span>——</span>推荐商家<span>——</span></p>
    </div>
    <!-- sort bar -->
    <!-- <div class="sort-box"> -->
      <mt-sort ref="sort"></mt-sort>
    <!-- </div> -->
    <mt-goodslist v-bind:good="indexid" ref="lis"></mt-goodslist>
    <!-- 底部导航 -->
    <mt-tabbar :selected="selected"></mt-tabbar>
    <div class="mark" ref="mark" @click="markEvt"></div>
  </div>
</template>

<script>
import {getItems} from '@/api/homeItems';
import Tabbar from '@/components/Tabbar.vue';
import GoodsList from './GoodsList.vue';
import sort from '@/components/Sort.vue'
export default {
  name:"home",
  data(){
    return {
      itemList:"",
      banner:"",
      indexid: 1,
      selected:"index",
    };
  },
  created() {
    this.getItemsList();
    window.addEventListener("scroll",() => {
        this.ScrollEvt();
    },false);
  },
  methods:{
    getItemsList(){
      getItems(0).then((res) => {
        this.itemList = res.message.items;
        this.banner = res.message.banner;
      });
    },
    ScrollEvt(){
     
      let top = window.pageYOffset;
      // console.log(top);
      let sort = this.$refs.sort.$el;
      let rect = this.$refs.lis.$el.getBoundingClientRect()
      if(top > 44.5){
        this.$refs.searchBox.$el.style.position = 'fixed';
        this.$refs.searchBox.$el.style.top = 0;
        this.$refs.searchBox.$el.style.left = 0;
        this.$refs.searchBox.$el.style.zIndex = 5;
        // console.log(this.$refs.searchBox);
      }else{
        this.$refs.searchBox.$el.style.position = '';
      }
      if(top > 322){
        sort.style.position = 'fixed';
        sort.style.top = this.$refs.searchBox.$el.offsetHeight + 'px';
        sort.style.left = 0;
        sort.style.zIndex = 5;
      }
      else if(top < 280){
        sort.style.position = '';
        sort.style.top = 0;
      }
      // rect.top < (this.$refs.searchBox.$el.offsetHeight + sort.offsetHeight)
    },
    // markShow(){
    //   let mark = this.$refs.mark;
    //   mark.style.display = 'block';
    // },
    // markClose(){
    //   let mark = this.$refs.mark;
    //   mark.style.display = 'none';
    // },
    markClose(){
      let mark = this.$refs.mark;
      mark.style.display = 'none'
      // console.log(getComputedStyle(mark).display);
      // if(getComputedStyle(mark).display == 'none'){
      //   mark.style.display = 'block';
      //   document.documentElement.style.overflow='hidden';
      // }else{
      //   mark.style.display = 'none';
      //   document.documentElement.style.overflow='';
      //   this.$refs.sort.sectionClose();
      // }
      
    },
    markOpen(){
      let mark = this.$refs.mark;
      mark.style.display = 'block'
    },
    markEvt(){
      let mark = this.$refs.mark;
      if(getComputedStyle(mark).display == 'none'){
        mark.style.display = 'block';
        document.documentElement.style.overflow='hidden';
      }else{
        mark.style.display = 'none';
        document.documentElement.style.overflow='';
        this.$refs.sort.sectionClose();
      }
    },
    selecteEvt(){
      console.log('准备刷新页面');
    }
  },
  components:{
    'mt-tabbar': Tabbar,
    'mt-goodslist': GoodsList,
    'mt-sort':sort
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a,a:hover,a:focus{
  color: #333;
  text-decoration: none;
}
ul,ol{
  list-style: none;
}
// header
.head{
  width: 100%;
  height: .445rem;
  background: linear-gradient(90deg, #0af 0%, #0085ff 100%);
  padding: .1rem .14rem 0rem;
  .location{
    width: 100%;
    height: 100%;
    font-size: .16rem;
    font-weight: 500;
    color: #fff;
    
  }
}
// search
.search{
  width: 100%;
  height: .51rem;
  padding: .075rem .14rem;
  background: linear-gradient(90deg, #0af 0%, #0085ff 100%);
  .search-box{
    height: .36rem;
    width: 100%;
    background-color: #fff;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    font-size: .16rem;
    line-height: .36rem;
    color: #999;
  }
  .fixed{
    position:fixed;
    top: 0;
    left: 0;
  }
}
// grid
.grid{
  width: 100%;
  height: 1.77rem;
  display: flex;
  flex-wrap: wrap;
  .cell{
    width: 20%;
    margin-top: .1rem;
    height: .64rem;
    font-size: .12rem;
    text-align: center;
    .img-box{
      width: .45rem;
      height: .45rem;
      background: #eee;
      margin: 0 auto;
      border-radius: 50%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
// banner
.banner{
  width: 100%;
  height: 1.1rem;
  padding: 0 .1rem;
  margin-bottom: .08rem;
  .banner-box{
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #f4f4f4 0%, #fafafa 100%);
    padding: .12rem 0 0 .15rem;
    font-size: .16rem;
    position: relative;
    p{
      &:first-of-type{
        font-weight: 700;
        margin-bottom: .05rem;
      }
      &:nth-of-type(2){
        font-size: .14rem;
        color: #777;
        margin-bottom: .05rem;
      }
      &:last-of-type{
        font-size: .12rem;
        color: #af8260;
      }
    }
    .banner-img{
      width: 1.41rem;
      height: .94rem;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
// mark
.mark{
  width: 100%;
  height: 555rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: .5;
  z-index: 3;
  display: none;
}
.home-t{
  width: 100%;
  height: .36rem;
  background-color: #fff;
  line-height: .36rem;
  text-align: center;
  color: #333;
  span{
    vertical-align: middle;
    color: #333;
    &:first-of-type{
      margin-right: .05rem;
    }
    &:last-of-type{
      margin-left: .05rem;
    }
  }
  p{
    color: #333;
  }
}
.selected{
  background-color: #edf5ff;
  color:#3190e8;
}

</style>  