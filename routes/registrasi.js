var express = require('express');
var router = express.Router();
var app = express();

// connect to mongodb
const { MongoClient, ConnectionCreatedEvent } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'fp-pemrograman-integratif';

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// connect to mongodb

// add router handler, so that server can access data in body when request
const bodyParser = require('body-parser');
const { request } = require('../app');

router.use(bodyParser.urlencoded({ extended: true }))
// add router handler, so that server can access data in body when request

// POST REGISTER
router.post('/', (req, res) => {
  client.connect((error, client) => {
    if(error) {
      return console.log('Koneksi Gagal');
    }
  
    // tambah satu data
    // pilih database 
    const db = client.db(dbName);
    const customerCollection = db.collection('customer');
  
    // db.collection('customer').insertOne(
    //   {
    //     nama : "sakti123",
    //     email : "sakti123@gamail.com"
    //   }
    // )
  
    // console.log('Koneksi Berhasil');
    // // client.close();

    // Simpan data ke collection notes
    customerCollection.insertOne(req.body).then((result) => {
      // tampilkan hasilnya di console
      console.log(result);
    });
    // tutup koneksi ke database
    // client.close();   ---> permasalahannya disini
  });
  

  // res.send("sukses rek");
  
  res.status(201).json("succes");
  // client.close(); // permasalahan ada di sini
});




module.exports = router;


// KEKURANGAN
// - Respon 201, created                    (SUDAH)
// - Field Respon 201 in console            (BELUM)
// - Respon 400, bad request                (BELUM)
// - Field Respon 400 in console            (BELUM)

// Question
// - Bagaimana jika parameter yg diinputkan kurang dan atau tidak sesuai format yg diharapkan. Misal string tp diisi number
