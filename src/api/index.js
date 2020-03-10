//引入ajax
import ajax from './ajax'
//const BASE = `http://localhost:5000`
//定义一个常量来标识网址前缀公共部分
const BASE = '/api'
//获取主页数据的请求
export const reqHome=()=>ajax({
  method:'GET',
  url:BASE+`/home`
})
//分类左侧
export const reqSortleft =()=>ajax({
  method:'GET',
  url:BASE+`/sort`
})
//分类右侧请求
export const reqSoltright =()=>ajax({
  method:'GET',
  url:BASE+`/sort:id`
})


// = ajax({
//   method: 'GET',
//   url: BASE + `/home`
// })