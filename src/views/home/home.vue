<template>
  <!-- style="overflow-y:hidden" -->
  <div>
    <div v-if="!flag">
      <header class="head">
        <div class="location" @click="addEvt">
          <span class="iconfont icon-location"></span>
          <span>{{$store.state.location}}</span>
          <span class="iconfont icon-down"></span>
        </div>
      </header>
      <!-- search -->
      <router-link to="/search" class="search" tag="div" ref="searchBox">
        <div class="search-box">
          <span class="iconfont icon-sousuo"></span>
          <span>搜索饿了么商家、商品名称</span>
        </div>
      </router-link>
      <!-- grid -->
      <div class="grid">
        <div tag="div" class="cell" v-for="item in itemList" :key="item.id" :id="item.id" @click.stop='cellEvt($event)'>
          <div class="img-box">
            <img :src="item.imgpath" />
          </div>
          <span v-text="item.name"></span>
        </div>
      </div>
      <!-- banner -->
      <div class="banner">
        <div class="banner-box">
          <p v-text="banner.title"></p>
          <p v-text="banner.desc"></p>
          <p v-text="banner.label"></p>
          <img class="banner-img" :src="banner.imgpath" />
        </div>
      </div>
      <!-- title -->
      <div class="home-t">
        <p>
          <span>——</span>推荐商家
          <span>——</span>
        </p>
      </div>
      <!-- sort bar -->
      <!-- <div class="sort-box"> -->
      <mt-sort ref="sort"></mt-sort>
      <!-- </div> -->
      <mt-goodslist v-bind:good="indexid" ref="lis"></mt-goodslist>
      <div class="mark" ref="mark" @click="markEvt"></div>
    </div>
    <mt-address v-if="flag" @retParent="reEvt"></mt-address>
    <!-- 底部导航 -->
      <mt-tabbar :selected="selected"></mt-tabbar>
  </div>
</template>

<script>
import { getItems } from "@/api/homeItems";
import Tabbar from "@/components/Tabbar.vue";
import GoodsList from "./GoodsList.vue";
import sort from "@/components/Sort.vue";
import address from "./address.vue";
export default {
  name: "home",
  data() {
    return {
      itemList: "",
      banner: "",
      indexid: 1,
      selected: "index",
      flag: false,
      location: "广州"
    };
  },
  created() {
    this.getItemsList();
    window.addEventListener("scroll", this.ScrollEvt, false);
    this.location = this.getLocation();
  },
  mounted() {
    // this.getLocation();
  },
  destroyed(){
    window.removeEventListener('scroll', this.ScrollEvt);
    document.documentElement.style.overflow = "";
  },
  methods: {
    getItemsList() {
      getItems(0).then(res => {
        this.itemList = res.message.items;
        this.banner = res.message.banner;
      });
    },
    ScrollEvt() {
      let top = window.pageYOffset;
      // console.log(top);
      let sort = this.$refs.sort.$el;
      let rect = this.$refs.lis.$el.getBoundingClientRect();
      if (top > 44.5) {
        this.$refs.searchBox.$el.style.position = "fixed";
        this.$refs.searchBox.$el.style.top = 0;
        this.$refs.searchBox.$el.style.left = 0;
        this.$refs.searchBox.$el.style.zIndex = 5;
        // console.log(this.$refs.searchBox);
      } else {
        this.$refs.searchBox.$el.style.position = "";
      }
      if (top > 322) {
        sort.style.position = "fixed";
        sort.style.top = this.$refs.searchBox.$el.offsetHeight + "px";
        sort.style.left = 0;
        sort.style.zIndex = 5;
      } else if (top < 280) {
        sort.style.position = "";
        sort.style.top = 0;
      }
      // rect.top < (this.$refs.searchBox.$el.offsetHeight + sort.offsetHeight)
    },
    markClose() {
      let mark = this.$refs.mark;
      mark.style.display = "none";
      document.documentElement.style.overflow = "";
    },
    markOpen() {
      let mark = this.$refs.mark;
      mark.style.display = "block";
      document.documentElement.style.overflow = "hidden";
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
    },
    selecteEvt(el) {
      console.log('您点击了：' + el + '!' + '准备向服务器请求相关数据');
      console.log('但并没请求，因为我的后台没准备好相应数据～');
    },
    // 点击了广州
    addEvt() {
      this.flag = true;
      // console.log(this.location);
      // this.getLocation();
    },
    reEvt() {
      // console.log('hello');
      this.flag = false;
    },
    // dingwei
    getLocation() {
      if (this.$store.getters.getLocation !== '') {
        return
      }
      var geolocation = new BMap.Geolocation();
      var that = this;
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          // console.log(r);
          that.location =
            r.address.city + r.address.district + r.address.street;
        } else {
          console.log("failed" + this.getStatus());
        }
      });
    },
    cellEvt(ev){
      var id = ev.currentTarget.id;
      this.$router.push({name:'food', params:{id}});
    }
  },
  watch: {
    location(newval) {
      // console.log(newval);
      if (newval != undefined) {
        this.$store.commit("moditityAddress", newval);
      }
    }
  },
  components: {
    "mt-tabbar": Tabbar,
    "mt-goodslist": GoodsList,
    "mt-sort": sort,
    "mt-address": address
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
  color: #333;
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
.clearfix:after{
  content: '';
  height: 0;
  clear: both;
  display: block;
  visibility: hidden;
}
// header
.head {
  width: 100%;
  height: 0.445rem;
  background: linear-gradient(90deg, #0af 0%, #0085ff 100%);
  padding: 0.1rem 0.14rem 0rem;
  .location {
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
    font-weight: 500;
    color: #fff;
  }
}
// search
.search {
  width: 100%;
  height: 0.51rem;
  padding: 0.075rem 0.14rem;
  background: linear-gradient(90deg, #0af 0%, #0085ff 100%);
  .search-box {
    height: 0.36rem;
    width: 100%;
    background-color: #fff;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.16rem;
    line-height: 0.36rem;
    color: #999;
  }
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
}
// grid
.grid {
  width: 100%;
  height: 1.77rem;
  display: flex;
  flex-wrap: wrap;
  .cell {
    width: 20%;
    margin-top: 0.1rem;
    height: 0.64rem;
    font-size: 0.12rem;
    text-align: center;
    .img-box {
      width: 0.45rem;
      height: 0.45rem;
      background: #eee;
      margin: 0 auto;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
// banner
.banner {
  width: 100%;
  height: 1.1rem;
  padding: 0 0.1rem;
  margin-bottom: 0.08rem;
  .banner-box {
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #f4f4f4 0%, #fafafa 100%);
    padding: 0.12rem 0 0 0.15rem;
    font-size: 0.16rem;
    position: relative;
    p {
      &:first-of-type {
        font-weight: 700;
        margin-bottom: 0.05rem;
      }
      &:nth-of-type(2) {
        font-size: 0.14rem;
        color: #777;
        margin-bottom: 0.05rem;
      }
      &:last-of-type {
        font-size: 0.12rem;
        color: #af8260;
      }
    }
    .banner-img {
      width: 1.41rem;
      height: 0.94rem;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
// mark
.mark {
  width: 100%;
  height: 555rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 3;
  display: none;
}
.home-t {
  width: 100%;
  height: 0.36rem;
  background-color: #fff;
  line-height: 0.36rem;
  text-align: center;
  color: #333;
  span {
    vertical-align: middle;
    color: #333;
    &:first-of-type {
      margin-right: 0.05rem;
    }
    &:last-of-type {
      margin-left: 0.05rem;
    }
  }
  p {
    color: #333;
  }
}
.selected {
  background-color: #edf5ff;
  color: #3190e8;
}
</style>  