<template>
  <div>
    <div class="gooslist">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="400"
      >
        <li class="list" v-for="item in list" :key="item.id">
          <div tag="div" class="list-box" @click="toGoondInfo(item.id)">
            <div class="shop-info">
              <div class="img-box">
                <img v-lazy="item.imgpath"/>
              </div>
              <div class="item-box">
                <div class="name">
                  <div class="badge" v-if="item.badge">品牌</div>
                  <span v-text="item.name"></span>
                  <span v-text="item.location"></span>
                  <span class="iconfont icon-ellipsis2 fr"></span>
                  <span class="fr bann" v-if="item.banner">广告</span>
                </div>
                <div class="star">
                  <span class="iconfont icon-star"></span>
                  <span class="iconfont icon-star"></span>
                  <span class="iconfont icon-star"></span>
                  <span class="iconfont icon-star"></span>
                  <span class="iconfont icon-star"></span>
                  <span class="ev" v-text="item.evaluate"></span>
                  <span>月售</span>
                  <span v-text="item.sell"></span>
                  <span>单</span>
                  <span class="fengniao" v-if="item.specialde">蜂鸟专送</span>
                </div>
                <div class="distance">
                  <span class="iconfont icon-qian"></span>
                  <span v-text="item.starting"></span>
                  <span>起送 | </span>
                  <span>配送费</span>
                  <span class="iconfont icon-qian"></span>
                  <span v-text="item.delivery"></span>
                  <span>元</span>
                  <span class="fr" v-text="item.time"> 31分钟</span>      
                  <span class="fr">{{item.distance}}|</span>            
                </div>
              </div>
              
            </div>
            <div class="index-active">
              <div class="banner-label">
                <button class="ban-btn"  v-for="ac in item.label" :key="ac.index">其他快餐</button>
              </div>
              <div class="active">
                <div class="row" v-for="active in item.active" :key="active.index">
                  <div class="main" v-text="active.main"></div>
                  <span v-text="active.desc"></span>
                </div>
                <div class="muchAc">
                  <span v-text="item.active.length"></span>
                  <span>个活动</span>
                  <span class="iconfont icon-down"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getItems} from '@/api/homeItems';
export default {
  name: "GoodsList",
  data() {
    return {
      list: [],
      loading: true,
      index:1,
    };
  },
  created() {
    this.getGoods(this.index++);
  },
  mounted() {
    
  },
  props: ["good"],
  methods: {
    loadMore() {
      this.loading = true;
      // console.log("触发了");
      // let id = this.index + 1;
      this.getGoods(this.index++);
    },
    getGoods(index){
      getItems(index).then(res => {
        if(index != 1){
            for(let i=0; i<res.message.goodsList.length; i++){
            res.message.goodsList[i].id = res.message.goodsList[i].id + ((index-1) * 5);
          }
        }
        this.list = this.list.concat(res.message.goodsList);
        // console.log(this.list);
        this.loading = false;
      });
    },
    toGoondInfo(id) {
      this.$router.push({name:"goodsinfo", params:{id}});
    }
  }
};
</script>
<style lang="less" scoped>
.gooslist{
  margin-bottom: .55rem;
  background-color: #fff;
}
ul {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
  font-size: 0.14rem;
}
.list {
  padding: 0.15rem 0.08rem;
  .list-box {
    .shop-info {
      width: 100%;
      height: 0.65rem;
      .img-box {
        width: 0.65rem;
        height: 0.65rem;
        float: left;
        img {
          width: 100%;
          height: 100%;
          float: left;
        }
      }
      .item-box {
        float: left;
        padding-left: 0.1rem;
        width: calc(100% - 0.65rem);
        height: 100%;
        .name {
          .badge {
            width: 0.27rem;
            height: 0.175rem;
            float: left;
            background-color: #ffe339;
            border-radius: 0.02rem;
            margin-right: 0.08rem;
            font-size: .1rem;
          }
          .fr {
            float: right;
          }
          .bann {
            font-size: 0.06rem;
            margin-right: 0.1rem;
          }
        }
        .star{
          font-size: .12rem;
          .icon-star{
            font-size: .12rem;
            &:nth-of-type(-n + 4)
            {
              color: #ffe339;
            }
          }
          .ev{
            margin: 0rem .05rem;
          }
          .fengniao{
            float: right;
            font-size: .12rem;
            background-color: #0085ff;
          }
        }
        .distance{
          font-size: .12rem;
          margin-top: .05rem;
          .fr{
            float: right;
            font-size: .12rem;
          }
        }
      }
      
    }
    .index-active{
      padding-left: .73rem;
      height: .70rem;
      width: 100%;
      font-size: .12rem;
      .banner-label{
        margin-top: .05rem;
        padding-bottom: .05rem;
        border-bottom: 1px solid #eee;
        .ban-btn{
          font-size: .10rem;
          border: 1px solid #eee;
          background: transparent;
        }
      }
      .active{
        width: 100%;
        height: .395rem;
        font-size: .12rem;
        padding-top: .05rem;
        position: relative;
        overflow: hidden;
        .row{
          .main{
            width: .15rem;
            height: .15rem;
            line-height: .15rem;
            border-radius: .02rem;
            background-color: green;
            float: left;
            margin-right: .05rem;
            vertical-align: middle;
          }
          span{
            display: inline-block;
            font-size: .12rem;
            line-height: .14rem;
            width: calc(100% - .2rem);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .muchAc{
          position: absolute;
          top: .05rem;
          right: 0;
          span{
            font-size: .12rem;
            color: #999;
          }
          .iconfont{
            font-size: .10rem;
          }
        }
      }
    }
  }
}
</style>