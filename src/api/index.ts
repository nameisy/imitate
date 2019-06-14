import axios from "axios";
import qs from "qs";
import { Message } from 'element-ui'
// 添加请求拦截器
axios.interceptors.request.use((config: any) => {
  return config;
}, (error: any) => {
  return Promise.reject(error);
})

// 添加响应拦截器
axios.interceptors.response.use( (response) => {
  // if (response.data.code && response.data.code === '90001') {
  //   logout()
  // }
  // if (response.data.code && response.data.code !== '10000') {
  //   return Promise.reject(response)
  // }
  return response.data
}, (error: any) => {
  let response = error.response
  // if (response.data.code && response.data.code === '90001') {
  //   logout()
  // }
  return Promise.reject(error)
});

// 封装axios
export function apiAxios(method: any, url: any, params?: any) {
  const httpDefault = {
    method,
    url,
    params: method === "GET" || method === "DELETE" ? params : null,
    data: method === "POST" || method === "PUT" ? qs.stringify(params) : null,
    timeout: 10000,
  };

  // 注意**Promise**使用(Promise首字母大写)
  return new Promise((resolve, reject) => {
    axios(httpDefault)
      // 此处的.then属于axios
      .then((res: {} | PromiseLike<{}> | undefined) => {
        resolve(res);
      }).catch((response: any) => {
        reject(response);
      });
  });
}
