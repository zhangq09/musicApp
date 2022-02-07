// index.ts

import { sayHello } from "../../api/hello"

// 获取应用实例

Page({
  data: {
    message: 'Hello World'
  },
  // 事件处理函数
  hi(){
    sayHello().then(data=>{
      console.log(data)
      this.setData({
        message: data+''
      })
    })
  }
})
