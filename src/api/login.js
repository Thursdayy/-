import service from '../utils/request';

export const Login = ((jsonObj) => service({
  method: 'post',
  url:'login',
  data:{
    phone:jsonObj.phone,
    code:jsonObj.code
  }
}));