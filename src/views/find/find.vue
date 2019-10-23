<template>
  <div class="find">
    <!-- toubu -->
    <div class="hd">
      <div class="first">
        <div class="items">
          <p class="title" v-text=head.first.title ></p>
          <p class="desc" v-text=head.first.desc></p>
        </div>
        <div class="img">
          <img :src="head.first.imgpath">
        </div>
      </div>
      <div class="second">
        <div class="first">
          <div class="context">
            <span class="recommond" v-text="head.second.title"></span><br>
            <span class="desc" v-text="head.second.desc"></span>
            <div class="img">
              <img :src="head.second.imgpath">
            </div>
          </div>
        </div>
        <div class="first">
          <div class="context">
            <span class="recommond" v-text="head.third.title"></span><br>
            <span class="desc" v-text="head.third.desc"></span>
            <div class="img">
              <img :src="head.third.imgpath" >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- goods -->
    <div class="bd">
      <p class="title">—— 为你推荐 ——</p>
      <p class="desc">你的口味，我都懂</p>
      <div class="goods">
        <div class="goods-box" v-for="item in goods" :key="item.id">
          <div class="img-box">
            <img :src="item.imgpath">
          </div>
          <div class="goods-item">
            <span v-text="item.name"></span><br>
            <span style="margin-right: .05rem" v-text="item.sell"></span><span v-text="item.evaluate"></span>
          </div>
          <div class="price">
            <span style="marin-right: .03rem" v-text="item.price"></span>
            <button v-if="item.active != '' "  v-text="item.active"></button>
          </div>
          <div class="name">
            <span v-text="item.store"></span>
          </div>
        </div>
        
      </div>
      <p class="more">查看更多<span class="iconfont icon-next"></span></p>
    </div>
    <div class="footer">
      <p class="title">—— 闲时好礼 ——</p>
      <p class="desc">金币换豪礼</p>
      <div class="footer-box">
        <div class="box" v-for="item in xianshi" :key="item.id">
          <div class="img-box">
            <img :src="item.imgpath">
            <button>限时优惠</button>
          </div>
          <p class="footer-name" v-text="item.title"></p>
          <p class="price"><span class="coin" v-text="item.coin"></span><del v-text="item.delete"></del></p>
        </div>
        
      </div>
      <p>查看更多<span class="iconfont icon-next"></span></p>
    </div>
    <mt-tabbar :selected="selected"></mt-tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar.vue";
import {getFind} from '@/api/findItem';
export default {
  name:"find",
  components: {
    "mt-tabbar": Tabbar
  },
  data(){
    return {
      selected:"find",
      head:{
        first:{},
        second:{},
        third:{}
      },
      goods:'',
      xianshi:''
    }
  },
  created(){
    this.getFindInfo();
  },
  methods:{
    getFindInfo(){
      getFind().then((res) => {
        if(res.status == 200){
          if(res.data != undefined){
            if(res.data.head != undefined){
              this.head.first = res.data.head[0];
              this.head.second = res.data.head[1];
              this.head.third = res.data.head[2];
            }
            if(res.data.goods != undefined){
              this.goods = res.data.goods;
            }
            if(res.data.xianshi != undefined){
              this.xianshi = res.data.xianshi;
            }
          }
          
        }else{
          console.log("Find page get data failue!");
        }
      });
    },
  }
}
</script>
<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a,a:hover,a:hover{
    text-decoration: none;
    color: #333;
  }
  ul,ol{
    list-style: none;
  }
  .find{
    font-size: .14rem;
    background-color: #eee;
  }
  .hd{
    width: 100%;
    height: 1.61rem;
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    margin-bottom: .1rem;
    >.first{
      padding: .22rem .11rem .06rem .16rem;
      display: flex;
      flex-direction: column;
      position: relative;
      width: 50%;
      border-right:1px solid #eee;
      .items{
        .title{
          font-size: .16rem;
          color: orange;
        }
        .desc{
          color:#999;
          font-size: .12rem;
        }
      }
      .img{
        position: absolute;
        bottom: .15rem;
        right: .08rem;
        width: .75rem;
        height: .75rem;
        // background-color: orange;
        >img{
          width: 100%;
          height: 100%;
        }
      }
      
    }
    >.second{
      width: 50%;
      display: flex;
      flex-direction: column;
      padding: 0rem .15rem;
      .first{
        position: relative;
        height: .8rem;
        &:first-of-type{
          border-bottom: 1px solid #eee;
        }
        .context{
          width: .86rem;
          height: .39rem;
          padding-top: .2rem;
          .desc{
            font-size: .12rem;
            color: #999;
          }
        }
        .img{
          width: .45rem;
          height: .45rem;
          position: absolute;
          right: 0;
          bottom: .15rem;
          // background-color: blue;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  // body
  .bd{
    width: 100%;
    padding: .2rem .08rem;
    background-color: #fff;
    text-align: center;
    margin-bottom: .1rem;
    >.title{
      font-size: .16rem;
      font-weight: 700;
      color: #000;
    }
    >.desc{
      font-size: .12rem;
      color: #999;
      padding-bottom: .08rem;
    }
    >.goods{
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border-bottom: 1px solid #eee;
      .goods-box{
        // display: flex;
        width: 50%;
        height: 2.655rem;
        // background-color: lightgreen;
        justify-content: space-around;
        .img-box{
          width: 1.715rem;
          height: 1.725rem;
          background-color: pink;
          display: block;
          >img{
            width: 100%;
            height: 100%;
          }
        }
        .goods-item{
          // position: absolute;
          height: .37rem;
          width: 1.65rem;
          margin: 0rem .1rem;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          span{
            &:nth-of-type(n + 2){
              font-size: .12rem;
            }
          }
        }
        .price{
          text-align: left;
          margin: 0rem .1rem;
          margin-top: .05rem;
          border-bottom: 1px solid #eee;
          vertical-align: baseline;
          padding-bottom: .03rem;
          span{
            color:red;
          }
          button{
            color: #f66d6b;
            border: 1px solid #f66d6b;
            background-color: transparent;
            font-size: .12rem;
            margin-left: .03rem;
          }
        }
        .name{
          text-align: left;
          margin-left: .1rem;
          width: 1.7rem;
          height:.3rem;
          line-height: .3rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: .12rem;
          color:#999;
        }
      }
    }
    >.more{
      margin-top: .15rem;
    }
  }
  // footer
  .footer{
    width: 100%;
    height: 3.55rem;
    background-color: #fff;
    font-size: .14rem;
    text-align: center;
    >.title{
      font-size: .16rem;
      font-weight: 700;
      margin-top: .15rem;
    }
    >.desc{
      font-size: .12rem;
    }
    >.footer-box{
      width: 100%;
      height: 1.94rem;
      padding: .12rem 0rem .15rem .15rem;
      margin-top: .08rem;
      background-color: lightblue;
      display: flex;
      .box{
        width: 33.3%;
        height: 100%;
        text-align: left;
        .img-box{
          width: 1.11rem;
          height: 1.10rem;
          background-color: pink;
          margin-bottom: .1rem;
          position: relative;
          >img{
            width: 100%;
            height: 100%;
          }
          >button{
            position: absolute;
            top:0;
            left: 0;
            width: .6rem;
            height: .18rem;
            background-color: #413d3c;
            font-size: .12rem;
            color:#fff;
            border: 0;
          }
        }
        .coin{
          color: #ff5339;
        }
        del{
          font-size: .12rem;
          color: #999;
          margin-left: .03rem;
        }
      }
    }
    >p{
        margin-top: .15rem;
        margin-bottom: .15rem;
      }
  }
</style>