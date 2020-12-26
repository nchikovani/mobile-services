const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const tariffRouter = require('./routes/tariff');
// const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json({limit: '10mb', extended: true}));

const uri = "mongodb+srv://admin:admin@cluster0.vr7at.mongodb.net/mobile-services?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}, function(err){
  if(err) return console.log(err);
  app.listen(process.env.PORT || 8080, function(){
    console.log("Сервер ожидает подключения...");
  });
});

app.use('/tariff', tariffRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});
