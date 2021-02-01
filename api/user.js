const User = require('../db/User');

module.exports.getUser = (req, res, next) => {
  User.find({})
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next)
}

module.exports.createUser = (req, res, next) => {
  const { fullname, username, password, birthday } = req.body;
  //validation basic
  if (typeof (fullname) !== 'string' || typeof (username) !== 'string' || typeof (password) !== 'string' && typeof (birthday) !== 'string') {
    return res.status(400).json({ message: "Sai dinh dang!" })
  }
  User.findOne({ username }).then(result => {
    if (result) return res.status(400).json({ message: "username da ton tai!" })

    //username chua dang ky
    const userNew = new User({ fullname, username, password, birthday });
    userNew.save().then(function (user) {
      if (user) return res.status(201).json({ user })
    }).catch(next)
  }).catch(next)
}