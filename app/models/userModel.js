const mongoose = require("mongoose"); //mongoDBに接続するためのライブラリ
const Schema = mongoose.Schema; //mongoDBのスキーマを作る

const UserSchema = mongoose.Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model("User", UserSchema);
