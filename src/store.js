import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopcarData: [],
    location:'广州',
    user:{
      name:'登录/注册',
      phone:'登录后享受更多特权'
    },
    cardata:{},
  },
  mutations: {
    // 增加商品数量
    addGoodsCount(state, dataObj) {

      var item = 0;
      item = state.shopcarData.find((el) => {
        if (el.storeId == dataObj.storeId && el.id == dataObj.id) {
          return el;
        }
      });
      if (item == undefined) {
        dataObj.num = 1;
        state.shopcarData.push(dataObj);
      } else {
        item.num++;
      }
    },
    // 减少商品数量
    reduceGoodsCount(state, dataObj) {
      // console.log(dataObj);
      var item = 0;
      item = state.shopcarData.find((el) => {
        if (el.storeId == dataObj.storeId && el.id == dataObj.goodId) {
          return el;
        }
      });
      if (item != undefined) {
        if (item.num <= 1) {
          for (var i = 0; i < state.shopcarData.length; i++) {
            if (state.shopcarData[i].storeId == dataObj.storeId && state.shopcarData[i].id == dataObj.goodId) {
              state.shopcarData.splice(i, 1);
            }
          }
        } else {
          item.num--;
        }
      }

    },
    // 设置location
    moditityAddress(state, add){
      state.location = add;
    },
    // user
    saveUser(state, info){
      state.user.name = info.name;
      state.user.phone = info.phone;
    },
    // delete goods
    clearGoods(state, id){
      // console.log(id);
      var i= 0;
      for(; i<state.shopcarData.length; i++){
       if(state.shopcarData[i].storeId == id){
        state.shopcarData.splice(i, 1);
        i -= 1;
        // console.log(state.shopcarData);
       }
      }
    },
    savecarData(state, data){
      state.cardata = data;
    }
  },
  getters: {
    // 给你商品的数量
    getCount: (state) => (dataObj) => {
      let total = 0;
      var item = state.shopcarData.find((el) => {
        if (el.storeId == dataObj.storeId && el.id == dataObj.id) {
          return el;
        }
      });
      if (item == undefined) {
        for (let i = 0; i < state.shopcarData.length; i++) {
          if (state.shopcarData[i].storeId == dataObj.storeId) {
            total += state.shopcarData[i].num;
          }
        }
        return { "id": 0, "count": 0, "Total": total };
      } else {
        for (let i = 0; i < state.shopcarData.length; i++) {
          if (state.shopcarData[i].storeId == dataObj.storeId) {
            total += state.shopcarData[i].num;
          }
        }
        return { "id": item.id, "count": item.num, "Total": total };
      }

    },
    // 给你整个选购的商品列表
    getList: (state) => (id) => {
      let list = [];
      // console.log(state.shopcarData);
      if (state.shopcarData == '') {
        return 0;
      } else {
        for (let i = 0; i < state.shopcarData.length; i++) {
          if (state.shopcarData[i].storeId == id) {
            list.push(state.shopcarData[i]);
            list[i].TotalPrice = (list[i].num * list[i].price.substr(1)).toFixed(1);
          }
        }
        return list;
      }
    },
    getUser(state){
      return state.user;
    },
    getLocation(state){
      return state.location;
    },
    getcarData(state){
      return state.cardata;
    }
  }
})
