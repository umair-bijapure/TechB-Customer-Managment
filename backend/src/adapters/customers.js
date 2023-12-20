const mongoose = require("mongoose");

const Customer = new mongoose.Schema({
  _id: {type: String},
  name: {type: String,default:""},
  customer_number: {type: String,default:""},
  meter_serial_number: {type: String,default:""},
  address:{type:String,default:""},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Customers", Customer);