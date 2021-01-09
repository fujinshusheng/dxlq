// components/common/tablist/tablist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      {
      "text": "审批",
      "iconPath": "/images/nav/shenpi.png",
      "selectedIconPath": "/images/nav/shenpimul.png",
      badge: '11'
    },
    {
      "text": "单据",
      "iconPath": "/images/nav/danju.png",
      "selectedIconPath": "/images/nav/danjumul.png",
    },
    {
      "text": "报表",
      "iconPath": "/images/nav/baobiao.png",
      "selectedIconPath": "/images/nav/baobiaomul.png",
    },
    {
      "text": "设置",
      "iconPath": "/images/nav/shezhi.png",
      "selectedIconPath": "/images/nav/shezhimul.png",
    }
  ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e) {
      console.log('tab change', e)
    }
  }
})
