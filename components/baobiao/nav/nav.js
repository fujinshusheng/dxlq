// components/baobiao/nav/nav.js
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

    navinfo:{
      title:"报表统计",
      navList:[
        {nav:"销售类",id:0},
        {nav:"采购类",id:1},
        {nav:"工程类",id:2},
        {nav:"人事类",id:3},
        {nav:"财务类",id:4},
        {nav:"质量类",id:5}
      ]
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navbtn:function(e){
      var id = e.currentTarget.dataset.id;
      this.triggerEvent('myevent', {
        id:id
      },{
        bubbles: true, composed: true
      })
      
    }
  }
})
