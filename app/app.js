// ライブラリ読み込み
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on("error", function(err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});

app.use(bodyParser.json());

var port = process.env.PORT || 3000; // port番号を指定

var router = require("./models/routes/v1/");
app.use("/api/v1/", router);

//サーバ起動
app.listen(port);
console.log("listen on port " + port);
