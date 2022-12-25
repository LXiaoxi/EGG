'use strict';

module.exports = app => {
 class User extends app.Service {

  async login(data) {
    const { app } = this
    const res = await app.mysql.select('user', { where: { phone: data.phone }})
    return res
  }

  async register(data) {
    const { app } = this
    const res = await app.mysql.insert('user', data)
    return res
  }
 }
 return User;
};
