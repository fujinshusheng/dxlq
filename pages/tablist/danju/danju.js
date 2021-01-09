// pages/danju/danju.js
var QQMapWX = require('../../../common/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:121.639356,
    latitude:29.882292,
    chooseposition:null,
    tripmode:[
      {
        mode:"公交地铁",
        url:"/images/map/公交车.png",
        backgroundcolor:"#09d3a8"
      },
      {
        mode:"实时公交",
        url:"/images/map/地铁.png",
        backgroundcolor:"#09d3a8"
      },
      {
        mode:"驾车",
        url:"/images/map/驾车.png",
        backgroundcolor:"#5b96ff"
      },
      {
        mode:"步行",
        url:"/images/map/步行.png",
        backgroundcolor:"#5b96ff"
      }
    ]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'HGFBZ-ASJW2-XZYUB-C2DYB-UF4UF-4KFPH'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap');
    this.mapCtx.getCenterLocation({
      success: function(res){
    
      }
    })
  },
  moveToLocation:function(){
    var _this = this;
    wx.chooseLocation({
      success:function(res){
        _this.setData({
          chooseposition:res
        })
        // qqmapsdk.calculateDistance({
        //   mode:"walking",
        //   from:{
        //     latitude:_this.data.longitude,
        //     longitude:_this.data.latitude
        //   },
        //   to:[
        //     {
        //       latitude:res.latitude,
        //       longitude:res.longitude
        //     }
        //   ],
        //   success:function(value){
        //     console.log(value)
        //     res.distance = value.result.elements[0].distance;
        //     console.log(res)
        //     _this.setData({
        //       chooseposition:res
        //     })
        //   }
        // });
      }
    })
  },
  goback:function(){
    this.setData({
      chooseposition:null
    })
  },
  ymgoto:function(e){
  
      wx.reLaunch({
        url:  "/pages/danju/routerplan/routerplan"
      })
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
   
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})