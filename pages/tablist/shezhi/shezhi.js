// pages/shezhi/shezhi.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../../store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  // checkboxChange:function(e){
  //   var tag = e.target.dataset.tag;
  //   var val = e.detail.value
  // },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['menus'],
      actions: ['checkboxChange','init']
    })
   this.init();
  },
  onUnload() {
    this.storeBindings.destroyStoreBindings()
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
    this.onLoad();
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