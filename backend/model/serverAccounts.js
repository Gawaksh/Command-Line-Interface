const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let serverAccounts = new Schema({
  server_name: {
    type: String
  },
  student_ip: {
    type: String
  },
  server_password: {
    type: String
  },
  server_port: {
    type: String
  }
}, {
  collection: 'serverAccounts'
})

module.exports = mongoose.model('ServerAccounts', serverAccounts)