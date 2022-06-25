var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM user', [], (err, users) => {
      if (err) {
        callback(err, null);
      } else {
        console.log(users);
        callback(null, users);
      }
    }
  )},
  create: function (username, callback) {
    db.query(`INSERT INTO user VALUE (${username})`, [], (err, username) => {
      if (err) {
        callback(err, null);
      } else {
        console.log(username);
        callback(null, usernmae);
      }
    }
  )}
};
