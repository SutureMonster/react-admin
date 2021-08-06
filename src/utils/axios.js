import axios from 'axios';

const baseURL = 'http://localhost:9000';

const instance = axios.create({
  baseURL: baseURL, //设置请求地址 
  timeout: 7000, //设置请求超时时间
  headers: {}
})


// Add a request interceptor  添加一个请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  //设置token
  config.headers['Authorization'] = localStorage.getItem('token')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor  添加一个响应拦截器
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  //对后端返回的数据进行处理，再返回数据到前端
  // console.log(333,response);
  let res = null;
  if (response.status === 200) {
    // 第二重拦截：对业务状态进行错误拦截		
    // console.log(222, response)
    res = response.data

  } else {
    alert('网络异常，稍后再试')
  }
  return res;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance;
