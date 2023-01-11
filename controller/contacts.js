/**Call Mongodb and return the data */
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getData = async(req, res, next) => {
  const result = await mongodb
  .getDb()
  .db()
  .collection('contacts')
  .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); 
    console.log(lists);
  });
};

const getOne = async(req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb 
    .getDb()
    .db()
    .collection('contacts')
    .find({_id: contactId});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
        console.log(lists);
    });
};

/*const getNewContact = async(req, res, next) => {
  const contact4 = {
    firstName: "Kimberly",
    lastName: "Oldroyd",
    email: "kimberly.oldroyd@gmail.com",
    favoriteColor: "White",
    birthday: 7/14/1971
  };
  const response = await mongodb
  .getDb()
  .db()
  .collection('contacts')
  .insertOne(contact4);
  res.setHeader('Content-Type', 'application/json');
  res.status(201).json(response);
  console.log(response);

}*/

//module.exports = { getData };
module.exports = { getData, getOne };

/**const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
}; */


/**Create a POST route to create a new contact. 
 * -All fields are required.
 * -Return the new contact id in the response body. */

// addUser API to a new user in the database
/*var express = require('express');
var app = express();
var fs = require("fs");*/

/*var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
 
 app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })*/

 /**access defined API using URL: http://127.0.0.1:8081/addUser and HTTP Method : 
  * POST on local machine using any REST client. */

