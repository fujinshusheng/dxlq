// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    styleIsolation: 'isolated', //表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响,
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  properties: {
    url:{
      type:String,
      value:""
    }
  },
  externalClasses: ['my-class'],
  /**
   * 组件的初始数据
   */
  data: {
    _a:11
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
