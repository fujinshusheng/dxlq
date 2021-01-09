// pages/gcdd/gcdd.js
const util = require("../../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:0,
    date:util.formatTime(new Date()),
    accounts: ["微信号", "QQ", "Email"],
    formArrs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },
  bindDateChange: function (e) {
    this.setData({
        date: e.detail.value,
        [`formData.date`]: e.detail.value
    })
  },
  bindAccountChange: function(e) {
    this.setData({
        accountIndex: e.detail.value
    })
  },
  addform:function(e){
    var number = e.currentTarget.dataset.number;
    var result = number + 1;
    var str_status = "formArrs[" + number + "]";
    this.setData({
      number:result,
      [str_status]:result
    })
  },
  deleteform:function(e){
    var tag = e.currentTarget.dataset.tag;
    var result = tag - 1;
    var arrs = this.data.formArrs;
    for(var key=0;key<arrs.length;key++){
      if(key == result){
        arrs.splice(key,1);
        key--;
        result--;
      }
      if(key > result){
        arrs[key] -=  1;
      }
    }
    this.setData({
      formArrs:arrs,
      number:arrs.length
    })
    
  }
})