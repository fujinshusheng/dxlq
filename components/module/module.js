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
    datalist:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    datas:[
      {title:"销售",status:"隐藏",tag:1,module:[
        {text:"数学",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:1},
        {text:"语文",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:120},
        {text:"英语",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:70},
        {text:"地理",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:30},
        {text:"物理",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:30},
        {text:"化学",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:0}
      ]},
      {title:"生产",status:"展开",tag:0,module:[
        {text:"香蕉",iconpath:"/images/fun/person.png"},
        {text:"西瓜",iconpath:"/images/fun/person.png"},
        {text:"梨",iconpath:"/images/fun/person.png"},
        {text:"苹果",iconpath:"/images/fun/person.png"},
        {text:"桃子",iconpath:"/images/fun/person.png"},
      
      ]},
      {title:"采购",status:"展开",tag:0,module:[
        {text:"香蕉",iconpath:"/images/fun/person.png"},
        {text:"西瓜",iconpath:"/images/fun/person.png"},
        {text:"梨",iconpath:"/images/fun/person.png"},
        {text:"苹果",iconpath:"/images/fun/person.png"},
        {text:"桃子",iconpath:"/images/fun/person.png"},
        {text:"菠萝",iconpath:"/images/fun/person.png"}
      ]},
      {title:"质量",status:"展开",tag:0,module:[
        {text:"香蕉",iconpath:"/images/fun/person.png"},
        {text:"西瓜",iconpath:"/images/fun/person.png"},
        {text:"梨",iconpath:"/images/fun/person.png"},
        {text:"苹果",iconpath:"/images/fun/person.png"},
        {text:"桃子",iconpath:"/images/fun/person.png"},
        {text:"菠萝",iconpath:"/images/fun/person.png"}
      ]},
      {title:"设置",status:"展开",tag:0,module:[
        {text:"香蕉",iconpath:"/images/fun/person.png"},
        {text:"西瓜",iconpath:"/images/fun/person.png"},
        {text:"梨",iconpath:"/images/fun/person.png"},
        {text:"苹果",iconpath:"/images/fun/person.png"},
        {text:"桃子",iconpath:"/images/fun/person.png"},
        {text:"菠萝",iconpath:"/images/fun/person.png"}
      ]}
    ]

  },
  /**
   * 组件的方法列表
   */
  methods: {
    infoshow:function(e){
      var tag = e.currentTarget.dataset.tag;
      var key = e.currentTarget.dataset.key;
      var str_status = "datas[" + key + "].status";
      var str_tag = "datas[" + key + "].tag";
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
      if(url){
        wx.reLaunch({
          url: url
        })
      }
    }
  }
})
