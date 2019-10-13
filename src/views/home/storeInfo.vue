<template>
  <div class="storeinfo">
    <div class="section">
      <p class="title">配送信息</p>
      <div>
        <p>{{storeData.info}}</p>
        <p>{{storeData.price}}</p>
      </div>
    </div>
    <div class="service">
      <p class="title">商家服务</p>
      <span></span>
      <span>{{storeData.service}}</span>
    </div>
    <div class="info">
      <p class="title">商家信息</p>
      <span>{{storeData.desc}}</span>
      <hr />
      <p class="desc">
        <span>品类</span>
        <span>{{storeData.cotagory}}</span>
      </p>
      <hr />
      <p class="desc">
        <span>商家电话</span>
        <span class="lianxi">联系店家</span>
      </p>
      <hr />
      <p class="desc">
        <span>地址</span>
        <span>{{storeData.address}}</span>
      </p>
      <hr />
      <p class="desc">
        <span>营业时间</span>
        <span>{{storeData.worktime}}</span>
      </p>
    </div>
    <div class="yingye">
      <p class="title">营业资质</p>
    </div>
  </div>
</template>
<script>
import { getStoreInfo } from "@/api/homeItems.js";
export default {
  name: "storeInfo",
  props: ["id"],
  data: function() {
    return {
      storeid: this.id,
      storeData:{}
    };
  },
  watch: {
    id: function(val) {
      this.getData(val);
    }
  },
  methods: {
    getData(id) {
      getStoreInfo(id)
        .then(res => {
          if (res.status == 200) {
            // console.log(res.data);
            this.storeData = res.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
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
}
ul,
ol {
  list-style: none;
}
.storeinfo {
  width: 100%;
  background-color: #eee;
  font-size: 0.14rem;
}
.section {
  padding: 0.16rem 0.15rem 0.15rem;
  margin-bottom: 0.1rem;
  background-color: #fff;
  .title {
    font-size: 0.16rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 0.16rem;
  }
}
.service {
  padding: 0.16rem 0.15rem 0.15rem;
  margin-bottom: 0.1rem;
  background-color: #fff;
  .title {
    font-size: 0.16rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 0.16rem;
  }
  span {
    color: #999;
  }
}
.info {
  background-color: #fff;
  padding: 0.16rem 0.15rem 0.15rem;
  margin-bottom: 0.1rem;
  .title {
    font-size: 0.16rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 0.16rem;
  }
  hr {
    height: 0.01rem;
    background-color: #eee;
    border: 0;
  }
  .desc {
    width: 100%;
    height: 0.46rem;
    line-height: 0.46rem;
    span {
      &:first-of-type {
        color: #000;
      }
      &:last-of-type {
        float: right;
        max-width: 2.5rem;
        display: block;
        text-align: right;
      }
    }
  }
}
.lianxi {
  color: #00a6ff;
}
.yingye {
  padding: 0.16rem 0.15rem 0.15rem;
  margin-bottom: 0.1rem;
  background-color: #fff;
  .title {
    font-size: 0.16rem;
    font-weight: 700;
    color: #000;
  }
}
</style>