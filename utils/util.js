const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const submit = (api,data,callback) => {
  const http = "http://192.168.8.199:21971/PCodeClient/api.ashx?cmd=";
  var url = http + api;
  wx.request({
    url: url,
    data:data,
    timeout:2000,
    header: {
      'content-type': 'application/json'
    },
    success (res) {
      if(res.data.status == "200"){
        callback(res);
        return false;
      }
      wx.showToast({
        title: res.data.error,
        icon: 'none',
        duration: 2000
      })
    },
    fail(){
      wx.showToast({
        title: '接口执行失败',
        icon: 'none',
        duration: 2000
      })
    }
  })
}
module.exports = {
  formatTime: formatTime,
  submit:submit
}
