const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/socials`;

let db;


  connectionStringURI,

  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {

    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  };



app.use(express.json());

app.post('/create', (req, res) => {
  db.collection('socials').insertOne(
    { title: req.body.title, author: req.body.author },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.post('/create-many', function (req, res) {
  db.collection('socials').insertMany(
    [
      {"email" : "turt78@gmail.com"},
      {"username" : "turt789"}
    ], 
    (err,results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get('/read', (req, res) => {
  db.collection('socials')

    .find({})
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});
