// components/baobiao/chart/chart.js
const util = require("../../../utils/util");
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    styleIsolation: 'isolated' //表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响
  },
  properties: {
    pages:{
      type:Number,
      value:2
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    chart:null,
    url:"/images/user/bar.png"
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
    },
    moved: function () { },
    detached: function () { },
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { 
      var arr = [];
      var obj =  {
        id:12,
        title:"部门业绩龙虎榜",
        brief:"本月部门业绩总额为826万,为本季度最高,排行前三分别为张三228万,李四186万,刘建彪170万,hahahhahaha",
        dateTime:"2020/10/20 21:18:12"
      }
      for(var key = 0;key<this.properties.pages;key++){
        arr.push(obj)
      }
      this.setData({
        chart:arr
      })
    },
    hide: function () { },
    resize: function () { },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ymgoto:function(e){
      var id = e.currentTarget.dataset.id;
      console.log(id)
      if(id){
        wx.reLaunch({
          url:  "/pages/baobiao/baobiaodetail/baobiaodetail?id=" + id
        })
      }
    }
  }
})
