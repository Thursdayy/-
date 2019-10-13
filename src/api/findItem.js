import service from '../utils/request';

export const getFind = (() => service({
  method: 'get',
  url:'find',
}));