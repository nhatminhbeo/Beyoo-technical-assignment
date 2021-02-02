const UserApi = require('../api/user')
const userPath = '/user'
module.exports.route = (app) => {
  app.get(userPath, UserApi.getUser);
  app.post(userPath,UserApi.createUser);
}
