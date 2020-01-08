const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/";

const app = express();
const port = process.env.PORT || 3001;


const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "../client/build")));


app.use(bodyParser.urlencoded({ extended: false,
  limit: '50mb',
  parameterLimit: 100000 }));

  app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
  }))

  
app.use(pino);

app.get('/api/cart', function (req, res) {
  console.log('hit')
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_547wlr4c");
    dbo.collection("cartapps").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    });
  });

}) 

app.post('/api/add', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_547wlr4c");
    var myobj = req.body
    dbo.collection("cartapps").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); 
})

app.delete('/api/delete', function (req, res){
  
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("heroku_547wlr4c");
  var myquery = {  app_name: req.body.app_name  };
  dbo.collection("cartapps").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});

  
})

app.get("*", (req, res) => {
  res.sendFile(path.join("../../client/build/index.html"));
});


app.listen(port, () =>
  console.log('Express server is running on localhost:3001')
);