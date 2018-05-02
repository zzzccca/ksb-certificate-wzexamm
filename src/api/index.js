import axios from 'axios'

export function findlist(data) {
  return axios({
    method: 'get',
    url: 'http://kd.wzks.cn/cert/cert/findlist',
    params: data
  })
}
export function findone(data){
  return axios({
    method:'get',
    url:'http://kd.wzks.cn/cert/cert/findone',
    params: data
  })
}
export function saveMessage(data){
  return axios({
    method:'post',
    url:'http://kd.wzks.cn/cert/cert/save',
    params:data
  })
}
export function sendCode(data){
  return axios({
    method:'get',
    url:'http://kd.wzks.cn/cert/cert/sendsms',
    params:data
  })
}
 