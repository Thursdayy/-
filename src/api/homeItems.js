import service from '../utils/request';

export const getItems = (id => service({
  method: 'get',
  url: 'home',
  params: {
    id: id
  },
}));
export const GoodInfo = ((id) => service({
  method: 'get',
  url: 'goodInfo',
  params: {
    id: id
  }
}));
export const getEvaluat = ((id) => service({
  method: 'get',
  url:'evaluate',
  params:{
    id
  }
}));
export const getStoreInfo = ((id) => service({
  method: 'get',
  url:'store',
  params:{
    id
  }
}));
