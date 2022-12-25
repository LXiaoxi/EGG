'use strict';

module.exports = app => {
 class Cartoon extends app.Controller {
  // 获取所有分类
  async getCartoonCategory() {
    const { ctx } = this
    const res = await ctx.service.cartoon.getCartoonCategory()
    ctx.body = res
  }
  // 添加分类
  async addCartoonCategory() {
    const { ctx } = this
    const data = ctx.request.body
    const res = await ctx.service.cartoon.addCartoonCategory(data)

    ctx.body = res
  }
  // 修改分类
  async updateCartoonCategory() {
    const { ctx } = this
    const data = ctx.request.body
    if(!data.id || !data.category_name) {
      return ctx.body = {code: 201, msg: '修改id或分类名不能为空'}
    }
    const res = await ctx.service.cartoon.updateCartoonCategory(data)
    ctx.body = res
  }
  // 删除分类
  async deleteCartoonCategory() {
    const { ctx } = this
    const data = ctx.params
    const res = await ctx.service.cartoon.deleteCartoonCategory(data)
    ctx.body = res
  }

  async test() {
    const { ctx } = this
    const param = {
      method: 'GET',
      rejectUnauthorized: false,
      dataType: 'text',
    }
    const res = await ctx.curl('https://www.mkzhan.com/category/?theme_id=1', param)
    // 获取数据
    // var reg = /<div class="common-comic-item"><\/div>/gi
    
    const reg = /<div class="common-comic-item">(\s\w*\s)<\/div>/

    const info = res.data.match(reg)
    console.log(info, "info");
    // ctx.body = info
    ctx.body = res.data
  }
 }
 return Cartoon;
};
