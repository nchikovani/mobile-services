const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// const Users = require('./models/Users');

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json({limit: '10mb', extended: true}));

// const uri = "mongodb+srv://admin:admin@cluster0.vr7at.mongodb.net/reporting?retryWrites=true&w=majority";
// const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
const uri = "mongodb://localhost:27017/";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}, function(err){
  if(err) return console.log(err);
  app.listen(process.env.PORT || 8080, function(){
    console.log("Сервер ожидает подключения...");
  });
});

// app.use('/admin', adminRouter);
// app.use('/user', userRouter);
// app.use('/', indexRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});
