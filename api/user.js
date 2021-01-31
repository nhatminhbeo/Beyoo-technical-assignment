const User = require('../db/User');

module.exports.getUser = (req, res, next) => {
  User.find({})
  .then(users =>{
    res.status(200).json(users)
  })
  .catch(next)
}
