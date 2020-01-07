const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var mongojs = require("mongojs");
var mongo_db = mongojs("mongodb://localhost:27017/appStoreDB", ["cartapps"]);

const app = express();
const port = process.env.PORT || 3001;


const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))


app.use(bodyParser.urlencoded({ extended: false,
  limit: '50mb',
  parameterLimit: 100000 }));

  app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
  }))

  
app.use(pino);

app.get('/api/greeting/:name', (req, res) => {
    
  const name = req.params.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/api/cart', function (req, res) {
  console.log('hit')
  mongo_db.cartapps.find(function (error, cartapps) {
    if(error)
        res.send(error);
    res.json(cartapps);
});
}) 

app.post('/api/add', function (req, res) {
  console.log('posted')
 let myobj = req.body
  console.log(req.body)
  mongo_db.cartapps.insert(myobj, function(err) {
    if(err){
    res.send(err);
    }
  res.json('works');
  });
})

app.delete('/api/delete', function (req, res){
  mongo_db.cartapps.remove({ app_name: req.body.app_name }, function (err, results) {
  });  res.json({success: req.body.app_name})
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(port, () =>
  console.log('Express server is running on localhost:3001')
);