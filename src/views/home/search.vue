<template>
  <div class="search">
    <header class="hd">
      <span class="iconfont icon-shangyiye" @click.stop="retEvt"></span>
    </header>
    <!-- search -->
    <div class="search-box">
      <form>
        <input type="text" placeholder="输入商家、商品名称" v-model="inputVal" @keydown="inputEvt" />
        <button>搜索</button>
        <span class="iconfont icon-sousuo"></span>
      </form>
    </div>
    <div class="box" ref="box">
      <!-- history -->
      <div class="history">
        <p>
          <span>历史搜索</span>
          <span>0</span>
        </p>
        <ul class="clearfix">
          <li>东川</li>
          <li>东川</li>
          <li>东川</li>
          <li>东川</li>
          <li>东川</li>
          <li>东川</li>
          <li>东川</li>
        </ul>
      </div>
      <!-- hot -->
      <div class="hot">
        <h3>热门搜索</h3>
        <ul class="clearfix">
          <li>奶茶</li>
          <li>洞庭乡野炒饭</li>
          <li>炒饭</li>
          <li>手抓饼</li>
          <li>烧仙草</li>
          <li>咖啡</li>
          <li>糯米饭</li>
        </ul>
      </div>
    </div>
    <!--  -->
    <div class="search-list">
      <ul>
        <li>
          <span class="iconfont icon-sousuo"></span> 东北
        </li>
        <!-- <li><span class="iconfont icon-sousuo"></span> 东北</li> -->
      </ul>
    </div>
    <!-- find -->
    <div class="find">
      <p ref="find">查找</p>
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      inputVal: "",
      timer:'',
    };
  },
  created() {
    var ifLogin = this.$store.getters.getUser;
    // if(ifLogin.name == '登录/注册'){
    //   this.$router.push({name:'login', params:{}});
    // }
  },
  methods: {
    // 防抖
    debounce(fn, wait) {
      var timeout = null;
      console.log(fn);
      return () => {
        console.log(fn);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn.apply(this, arguments);
        }, wait);
      }
    },
    inputEvt() {
      // console.log(this.inputVal);
      clearTimeout(this.timer);
      var that = this;
      this.timer = setTimeout(()=>{
        // console.log(this.inputVal);
        if(this.inputVal != ''){
          this.$refs.box.style.display = 'none';
          this.$refs.find.parentElement.style.display = 'block';
          this.$refs.find.innerText = '查找'+'"'+this.inputVal+'"';
        }else{
          this.$refs.find.parentElement.style.display = 'none';
          this.$refs.find.innerText = '';
          this.$refs.box.style.display = 'block';
        }
      }, 200)
    },
    retEvt(){
      this.$router.push({name:'home', params:{}});
    }
  }
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a,
a:hover,
a:focus,
a:visited {
  text-decoration: none;
  color: #333;
}
ul,
ol {
  list-style: none;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.search {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fff;
  font-size: 0.14rem;
  color: #333;
}
//
.hd {
  height: 0.4rem;
  width: 100%;
  line-height: 0.4rem;
  padding-left: 0.1rem;
  font-size: 0.2rem;
  font-weight: 700;
  color: #777;
}
//
.search-box {
  padding: 0.1rem;
  form {
    position: relative;
    input {
      margin: 0;
      border: 0;
      background-color: #fafafa;
      width: 3.1rem;
      font-size: 0.12rem;
      padding-left: 0.3rem;
      height: 0.31rem;
    }
    button {
      height: 0.31rem;
      margin-left: 0.1rem;
      border: 0;
      color: #333;
      font-weight: 700;
    }
    > span {
      position: absolute;
      top: 50%;
      left: 0.05rem;
      transform: translateY(-50%);
    }
  }
}
//
.history {
  padding: 0.1rem;
  > p {
    span {
      &:first-of-type {
        font-size: 0.16rem;
        font-weight: 700;
      }
      &:last-of-type {
        float: right;
        padding-right: 0.1rem;
      }
    }
  }
}
.box {
  // display: none;
  ul {
    margin-top: 0.1rem;
    li {
      // width: .3rem;
      // height: .2rem;
      float: left;
      background-color: #fafafa;
      padding: 0.08rem 0.1rem;
      margin-right: 0.1rem;
      margin-top: 0.1rem;
    }
  }
}
//
.hot {
  padding: 0.1rem;
  h3 {
    font-size: 0.18rem;
    color: #555;
  }
}
//
.search-list {
  padding: 0.1rem;
  display: none;
  ul {
    width: 100%;
    li {
      margin-left: 0.3rem;
      height: 0.44rem;
      line-height: 0.44rem;
      border-bottom: 1px solid #eee;
      position: relative;
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -0.2rem;
      }
    }
  }
}
//
.find {
  padding: 0.1rem;
  position: relative;
  display: none;
  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  p {
    padding-left: 0.3rem;
  }
}
</style>