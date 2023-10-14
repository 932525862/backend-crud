const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: String,
  surname:String,
  age:Number,
  job:String,

});

exports.Users = mongoose.model("Users", UsersSchema);