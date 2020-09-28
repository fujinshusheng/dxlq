// components/process/process.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    styleIsolation: 'isolated' //表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响
  },
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    process:[
      {text:"待审批",url:"/pages/index/index"},
      {text:"已通过",url:"/pages/index/index"},
      {text:"已驳回",url:"/pages/index/index"},
      {text:"历史记录",url:"/pages/index/index"}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ymgoto:function(e){
      var url = e.currentTarget.dataset.url;
      if(url){
        wx.reLaunch({
          url: url
        })
      }
    }
  }
})
