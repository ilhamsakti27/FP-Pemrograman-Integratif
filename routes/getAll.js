var express = require('express');
var router = express.Router();
var app = express();

// connect to mongodb
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'fp-pemrograman-integratif';

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// connect to mongodb

// add router handler, so that server can access data in body when request
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))
// add router handler, so that server can access data in body when request

// GET ALL
router.get('/', (req, res) => {
  client.connect((error, client) => {
    if(error) {
      return console.log('Koneksi Gagal');
    }
  
    // tambah satu data
    // pilih database 
    const db = client.db(dbName);
    const customerCollection = db.collection('customer');
  
    //  Read all data
    customerCollection
      .find()
      .toArray()
      .then((result) => {
        res.status(200).json(result);
        });
    });
});
  

  // res.send("sukses rek");
  
  // res.status(200).json('Data successfully saved A1.1');
  // // client.close(); // permasalahan ada di sini




module.exports = router;
