import config from './config'
function request(
  url,
  data={},
  methods='GET',
) {
 return new Promise((resolve,reject)=>{
  wx.request({
    url:config.host+url,
    data,
    methods,
    //成功的回调
    success: function (req) {
      resolve(req.data)
    },
    //失败的回调
    fail:function(error){
      console.log(error)
    }
  })
 })
}
//暴露
export default request
