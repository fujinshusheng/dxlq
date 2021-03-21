import { configure, observable, action } from 'mobx-miniprogram'

// 不允许在动作外部修改状态
configure({ enforceActions: 'observed' });

export const store = observable({
  name:"liujianbiao",
  menus:[
    {title:"销售",status:"隐藏",tag:1,module:[
      {text:"数学",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:1,checked:true},
      {text:"语文",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:120,checked:true},
      {text:"英语",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:70,checked:true},
      {text:"地理",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:30,checked:true},
      {text:"物理",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:30,checked:true},
      {text:"化学",iconpath:"/images/fun/person.png",url:"/pages/index/index",num:0,checked:true}
    ]},
    {title:"生产",status:"展开",tag:0,module:[
      {text:"香蕉",iconpath:"/images/fun/person.png",checked:true},
      {text:"西瓜",iconpath:"/images/fun/person.png",checked:true},
      {text:"梨",iconpath:"/images/fun/person.png",checked:true},
      {text:"苹果",iconpath:"/images/fun/person.png",checked:true},
      {text:"桃子",iconpath:"/images/fun/person.png",checked:true},
    ]},
    {title:"采购",status:"展开",tag:0,module:[
      {text:"香蕉",iconpath:"/images/fun/person.png",checked:true},
      {text:"西瓜",iconpath:"/images/fun/person.png",checked:true},
      {text:"梨",iconpath:"/images/fun/person.png",checked:true},
      {text:"苹果",iconpath:"/images/fun/person.png",checked:true},
      {text:"桃子",iconpath:"/images/fun/person.png",checked:true},
    ]},
    {title:"质量",status:"展开",tag:0,module:[
      {text:"香蕉",iconpath:"/images/fun/person.png",checked:true},
      {text:"西瓜",iconpath:"/images/fun/person.png",checked:true},
      {text:"梨",iconpath:"/images/fun/person.png",checked:true},
      {text:"苹果",iconpath:"/images/fun/person.png",checked:true},
      {text:"桃子",iconpath:"/images/fun/person.png",checked:true},
    ]},
    {title:"设备",status:"展开",tag:0,module:[
      {text:"香蕉",iconpath:"/images/fun/person.png",checked:true},
      {text:"西瓜",iconpath:"/images/fun/person.png",checked:true},
      {text:"梨",iconpath:"/images/fun/person.png",checked:true},
      {text:"苹果",iconpath:"/images/fun/person.png",checked:true},
      {text:"桃子",iconpath:"/images/fun/person.png",checked:true},
    ]}
  ],
  // actions
  checkboxChange: action(function (e) {
    var tag = e.target.dataset.tag;
    var vals = {...e.detail.value};  //将数组转为对象格式，节省性能
    var arrs = this.menus[tag].module;
    for(let key=0;key<arrs.length;key++){
      arrs[key].checked = true;
      for(let val in vals){
        if(arrs[key].text == vals[val]){
          arrs[key].checked = false;
          break;
        }else{
          arrs[key].checked = true;
        }
      }
    }
  }),
  init :action(function(e){
    this.menus = this.menus
  })
})
