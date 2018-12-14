//index.js
//获取应用实例
import cookies from '../../vendor/weapp-cookie/dist/weapp-cookie';
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

  },
  //事件处理函数
  login: function () {
    var view = this
    wx.login({
      success: function(res){
        wx.request({
          url: app.baseUrl+'/user/',
          data: {
            action: "login",
            body: {
              code: res.code
            }
          },
          method: 'post',
          success: function(res){
            wx.showToast({
              title: res.data.toString(),
              icon: 'success',
              duration: 2000
            });
            console.log(res.data);
            console.log(cookies.dir("localhost"));
          }
        })
      }, 
      fail: function(res) {},
      complete: function (res) {},
    })
  }
})
