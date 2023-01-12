/**Call Mongodb and return the data */
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

getData = async(req, res, next) => {
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

const newContact = async(req, res) => {
  const contact = 
  {
    
    firstName: "Kimberly",
    lastName: "Oldroyd",
    email: "kimberly.oldroyd@gmail.com",
    favoriteColor: "White",
    birthday: "7/14/1971"
  
};
  const response = await mongodb
  .getDb()
  .db()
  .collection('contacts')
  .insertOne(contact);
  res.setHeader('Content-Type', 'application/json');
  if (response.acknowledged) {
    res.status(201).json(response);
    console.log(response);
  } else {
    res.status(500).json(response.error || 'Error: The contact could not be update.');
  }
};

const updateContact = async(req, res) => {
  const contactId = new ObjectId(req.params.id);
  const contact = 
  {    
    firstName: "Kim",
    lastName: "Oldroyd",
    email: "kimberly.oldroyd@gmail.com",
    favoriteColor: "White",
    birthday: "7/14/1971"  
};
const response = await mongodb
.getDb()
.db()
.collection('contacts')
.replaceOne({_id: contactId}, contact);
res.setHeader('Content-Type', 'application/json');
if (response.modifiedCount > 0) {
  res.status(204).send();
  console.log(response);

} else {
  res.status(500).json(response.error || 'Error: The contact could not be update.');
}
};
const deleteContact = async(req, res) => {
  const contactId = new ObjectId(req.params.id);
  const response = await mongodb 
  .getDb()
  .db()
  .collection('contacts')
  .deleteOne({_id: contactId}, true); 
  res.setHeader('Content-Type', 'application/json');  
  if (response.modifiedCount > 0) {
    res.status(200).send();
    console.log(response);

  } else {
    res.status(500).json(response.error || 'Error: The contact could not be deleted.');
  }
};

module.exports = { getData, getOne, newContact, updateContact, deleteContact}
