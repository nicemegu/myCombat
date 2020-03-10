//引入 axios
import axios  from 'axios'
//引入qs
import qs from 'qs'
//请求拦截器
axios.interceptors.request.use((config)=>{
  //获取method对象，data对象，解构method的data
  const {method,data} =config
  //判断发送请求的方式 是否为POST
  if(method.toUpperCase() === 'POST'&& data instanceof Object){
    //把data对象转为urlencoding的形式
    config.data = qs.stringify(data)
  }
  return config

})

//响应拦截器
axios.interceptors.response.use(response=>{
  return response.data
},error=>{
  //处理请求和响应的时候的错误消息
  //判断是请求错误还是响应错误
  if(!error.response){
    //请求错误处理
    console.log('响应错误')
  }
})

export default axios