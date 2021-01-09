// components/module/module.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    styleIsolation: 'isolated' //表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响
  },
  properties: {
    menus:{
      type:Array,
      value:[]
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    test:null
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
     
    },
    moved: function () { },
    detached: function () { },
  },
  pageLifetimes: {
    show: function() {
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    infoShow:function(e){
      var tag = e.currentTarget.dataset.tag;
      var key = e.currentTarget.dataset.key;
      var str_status = "menus[" + key + "].status";
      var str_tag = "menus[" + key + "].tag";
      if(tag == 0){
        this.setData({
          [str_status]:'隐藏',
          [str_tag]:1
        })
      }else{
        this.setData({
          [str_status]:'展示',
          [str_tag]:0
        })
      }
    },
    ymgoto:function(e){
      var url = e.currentTarget.dataset.url;
      url = "/pages/shenpi/lists/lists"
      if(url){
        wx.reLaunch({
          url: url
        })
      }
    }
  }
})
