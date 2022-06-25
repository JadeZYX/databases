var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM messages', [], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(results);
      callback(null, results);
    }
  })}, // a function which produces all the messages
  create: function (values, callback) {db.query(`INSERT INTO messages VALUES (${values})`, [], (err, values) => {
    console.log(values);
    if (err) {
      callback(err, null);
    } else {
      console.log(values);
      callback(null, values);
    }
  } )} // a function which can be used to insert a message into the database
};


// Write SQL code that filters out the messages
// Write SQL code that input messages into db

