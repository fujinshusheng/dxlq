// components/common/fuzzy/fuzzy.js
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
    num:0,    //控制列表时候显示
    val:"",   //输入框内的值
    height:null,  //列表高度
    dataList:null,
    iconUrl:"/images/fun/search.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show:function(){
      this.setData({
        num:1
      })
    },
    chaxun:function(e){
      var val = e.detail.value;
      var iconUrl = null;
      if(val){
        iconUrl = "/images/fun/delete.png";
      }else{
        iconUrl = "/images/fun/search.png";
      }
      var arrs = [
        {title:"数学",id:1},
        {title:"语文",id:2},
        {title:"英语",id:3},
        {title:"地理",id:4},
        {title:"语文",id:2},
        {title:"英语",id:3},
        {title:"地理",id:4}
      ];
      var finallength = arrs.length > 6 ? 6 :arrs.length;
      console.log(e)
      console.log(iconUrl)
      this.setData({
        dataList:arrs,
        height:finallength * 60 + 'rpx',
        iconUrl:iconUrl
      })

    },
    choose:function(e){
      var key = e.currentTarget.dataset.key;
      var result = this.data.dataList[key].title;
      console.log(result)
      this.setData({
        num:0,
        val:result
      })
    }
  }
})
