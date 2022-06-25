var models = require('../models');


module.exports = {
  get: function (req, res) {
    models.getAll((err, results) => {
    if (results) {
      res.statusCode(200).json(results);
    } else{
      res.statusCode(400);
    }
  })}, // a function which handles a get request for all messages
  post: function (req, res) {
    models.create(req.body,(err)=>{
      if(err){
        res.statusCode(400);
      }
      else{
        console.log("this is a test", req.body);
        res.statusCode(200).json(req.body);
      }

    })
  } // a function which handles posting a message to the database
};


// need to talk to models.js
// http request between server and database

