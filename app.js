const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongodb = require('./db/connect.js');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes');
//const MongoClient = require('mongodb').MongoClient;

//conDB.connectDB();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  
  app.use('/', contactRoutes);

mongodb.connectDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else{
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

//app.listen(port, () => console.log("Running"));
