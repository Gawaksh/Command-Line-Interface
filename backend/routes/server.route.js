const express = require('express');
const app = express();
const serverRoute = express.Router();

// Server model
let Server = require('../model/serverAccounts');

// Add Server
serverRoute.route('/add-Server').post((req, res, next) => {
  Server.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all Server
serverRoute.route('/').get((req, res) => {
  Server.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Server
serverRoute.route('/read-Server/:id').get((req, res) => {
  Server.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Server
serverRoute.route('/update-Server/:id').put((req, res, next) => {
  Server.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
        console.log(error)
      return next(error);
    } else {
      res.json(data)
      console.log('Server successfully updated!')
    }
  })
})

// Delete Server
serverRoute.route('/delete-Server/:id').delete((req, res, next) => {
  Server.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = serverRoute;