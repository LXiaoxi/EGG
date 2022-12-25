'use strict';
const jwt = require('jsonwebtoken')
module.exports = app => {
 class Controller extends app.Controller {
  
  // 登录
  async login() {
    const { ctx, app } = this
    // console.log(ctx.headers.authorization, '123');
    // 设置token
    const { phone } = ctx.request.body
    const token = jwt.sign({phone}, app.config.jwt.secret, {
      expiresIn: 60*60*24
    })

    ctx.body = { code: 200, msg: '用户登录成功', token}

  }

  // 注册
  async register() {
    const { ctx } = this
    const res = await ctx.service.user.register(ctx.request.body)
    if(res) {
      ctx.body = { code: 200, msg: '注册成功' }
    }

  }
  
  async getUserInfo() {
    const { ctx } = this
    ctx.body = ctx.user
  }
 }
 return Controller;
};
