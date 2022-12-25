const Service = require("egg").Service

class HomeService extends Service {
  async find() {
    const user = await this.app.mysql.get('user');
    return { user };
  }
}
module.exports = HomeService