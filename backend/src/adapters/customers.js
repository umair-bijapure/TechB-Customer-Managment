const mongoose = require("mongoose");

const Customer = new mongoose.Schema({
  _id: {type: String},
  name: {type: String},//compulsory
  customer_contact_number: {type: String},//or compulsory
  meter_serial_number: {type: String,default:""},
  address:{type:String,default:""},
 
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Customers", Customer);