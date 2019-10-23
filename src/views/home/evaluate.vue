<template>
  <div class="evaluate">
    <!-- 评价头 -->
    <div class="hd">
      <div class="total">
        <p>{{head.storeEv}}</p>
        <div class="item">
          <span>商家评分</span>
          <br />
          <span class="iconfont icon-star"></span>
          <span class="iconfont icon-star"></span>
          <span class="iconfont icon-star"></span>
          <span class="iconfont icon-star"></span>
          <span class="iconfont icon-star"></span>
        </div>
      </div>
      <div class="aa">
        <div>
          <span>味道</span>
          <br />
          <span>{{head.tasteEv}}</span>
        </div>
        <div>
          <span>包装</span>
          <br />
          <span>{{head.packEv}}</span>
        </div>
      </div>
      <div class="dilievery">
        <span>配送</span>
        <br />
        <span>{{head.deliveryEv}}</span>
      </div>
    </div>
    <!-- 评价体 -->
    <div class="bd">
      <!-- 评价标签 -->
      <div class="badge">
        <ul class="clear bd-ul" ref="ev">
          <li class="item">全部评价</li>
        </ul>
        <p>只看有内容的评价</p>
        <!-- pinglun list -->
        <div class="main">
          <ul>
            <li class="list-item" v-for="item in main" :key="item.index" ref="evLi">
              <p class="title">
                <span v-if="item.name != ''">{{item.num}}</span>
                <span>{{item.time}}</span>
              </p>
              <p class="star">
                <span class="iconfont icon-star"></span>
                <span class="iconfont icon-star"></span>
                <span class="iconfont icon-star"></span>
                <span class="iconfont icon-star"></span>
                <span class="iconfont icon-star"></span>
                <span class="chao">超赞</span>
              </p>
              <p class="desc">{{item.desc}}</p>
              <div class="reply" v-if="item.reply != ''">{{item.reply}}</div>
              <ul class="image" v-if="item.pic != ''">
                <li class="img-box" v-for="img in item.pic" :key="img.path">
                  <img  :src="img.path" alt="" :preview="0" >
                </li>
              </ul>
              <div class="bt">
                <span class="bang" v-if="item.goodname != '' ">我</span>
                <span v-if="item.goodname != '' ">{{item.goodname}}</span>
              </div>
              <span class="img"></span>
            </li>
          </ul>
          <p class="footer">没有更多数据了</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEvaluat } from "@/api/homeItems.js";
// import { writeSync } from 'fs';
export default {
  name: "evaluate",
  props: ["id", "Evselected"],
  data: function() {
    return {
      active: "1",
      storeid: this.id,
      head: {},
      main: [],
      index: 1
    };
  },
  created: function() {},
  methods: {
    getData(id, index) {
      getEvaluat(id, index)
        .then(res => {
          if (res.status == 200) {
            this.head = res.data.head;
            this.main = this.main.concat(res.data.main);
            // console.log(this.main);
            this.$previewRefresh();
          }
        })
        .catch(error => {
          this.index --;
          console.log(error);
        });
    },
    loadMore() {
      // console.log("haha");
      let num = this.main.length-5;
      let el = this.$refs.evLi;
      let target = el[num];  //获得评论列表中倒数第五个评论
      // console.log(target);
      // 判断其是否到达视口
      
      let rect = target.getBoundingClientRect();
      let windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight // 浏览器高度兼容写法
      // console.log(rect.top);
      // console.log(windowH);

      if((rect.top < windowH) && (rect.top > 300)){
        if(this.index > 5){
          return ;
        }
        if((this.main.length)/10 == this.index){
        this.index ++;
        this.getData(this.storeid, this.index);
      }
      }
    }
  },
  watch: {
    id(val) {
      this.getData(val, this.index);
    },
    Evselected(val) {
      if (val == 2) {
        window.addEventListener("scroll",() => {
          this.loadMore();
        },false);
      }
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
.clear:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
}
.claer {
  zoom: 1;
}
.evaluate {
  font-size: 0.14rem;
  color: #333;
  background-color: #eee;
}
// 评价头
.hd {
  width: 100%;
  // height: .955rem;
  padding: 0.2rem 0rem 0.3rem 0.24rem;
  background-color: #fff;
  overflow: hidden;
  .total {
    height: 0.455rem;
    width: 1.26rem;
    // background-color: pink;
    float: left;
    p {
      width: 0.555rem;
      height: 100%;
      font-size: 0.4rem;
      color: red;
      line-height: 0.455rem;
      text-align: center;
      display: inline-block;
    }
    .item {
      font-size: 0.12rem;
      float: right;
      color: #999;
      .icon-star {
        font-size: 0.12rem;
        line-height: 0.12rem;
        &:nth-of-type(-n + 5) {
          color: #ffe578;
        }
      }
      span {
        line-height: 0.12rem;
      }
    }
  }
  .aa {
    width: 0.85rem;
    height: 0.43rem;
    margin: 0rem 0.27rem;
    float: left;
    > div {
      &:first-of-type {
        float: left;
      }
      &:last-of-type {
        float: right;
      }
      span {
        &:last-of-type {
          font-size: 0.2rem;
        }
      }
    }
  }
  .dilievery {
    width: 0.85rem;
    height: 0.43rem;
    float: left;
    // background-color: pink;
    border-left: 1px solid #eee;
    text-align: center;
    span {
      &:last-of-type {
        font-size: 0.2rem;
      }
    }
  }
}
// 评价体
.bd {
  margin-top: 0.1rem;
  background-color: #fff;
  padding: 0.1rem 0.12rem;
  // 标签
  .badge {
    width: 100%;
    > .bd-ul {
      padding-bottom: 0.05rem;
      border-bottom: 1px solid #eee;
    }
    .item {
      float: left;
      height: 0.28rem;
      margin: 0.07rem;
      // background-color: pink;
      line-height: 0.28rem;
      text-align: center;
      background-color: #ebf5ff;
      border-radius: 0.02rem;
      padding: 0 0.08rem;
      font-size: 0.12rem;
    }
    .active {
      background-color: #0097ff;
      color: #fff;
    }
    //
    > p {
      height: 0.4rem;
      padding-left: 0.2rem;
      line-height: 0.4rem;
      border-bottom: 1px solid #eee;
    }
    // list
    .main {
      .list-item {
        padding-left: 0.4rem;
        padding-top: 0.15rem;
        padding-bottom: 0.12rem;
        border-bottom: 1px solid #eee;
        position: relative;
        .title {
          span {
            &:last-of-type {
              float: right;
            }
          }
        }
        .star {
          .icon-star {
            font-size: 0.12rem;
            &:nth-of-type(-n + 4) {
              color: #ffe578;
            }
            &:last-of-type {
              margin-right: 0.05rem;
            }
          }
          span {
            &:last-of-type {
              color: #ff6000;
              margin-left: 0.05rem;
              font-size: 0.12rem;
            }
          }
        }
        .desc {
          color: #000;
        }
        .reply {
          width: 100%;
          background-color: #f3f3f3;
          margin: 0.1rem 0rem;
          padding: 0.1rem;
        }
        .image {
          width: 100%;
          height: 1.5rem;
          margin-bottom: 0.1rem;
          margin-top: 0.05rem;
          .img-box {
            width: 1.4rem;
            height: 1.4rem;
            // background-color: pink;
            float: left;
            &:first-of-type{
              margin-right: .05rem;
            }
            img{
              width: 100%;
              height: 100%;
              
            }
          }
        }
        .bt {
          width: 100%;
          .bang {
            margin-right: 0.05rem;
          }
          span {
            &:nth-of-type(n + 2) {
              padding: 0rem 0.06rem;
              margin: 0rem 0.04rem 0.04rem 0rem;
              background-color: #ebf5ff;
            }
          }
        }
        .img {
          width: 0.3rem;
          height: 0.3rem;
          display: block;
          position: absolute;
          top: 0.15rem;
          left: 0;
          border-radius: 50%;
          background-color: lightgreen;
        }
      }
      .footer{
        height: .4rem;
        text-align: center;
        line-height: .4rem;
        color: #999;
      }
    }
  }
}
</style>