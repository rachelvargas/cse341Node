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

const newContact = async(req, res) => {
  const contact4 = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }; 

  
const response = await mongodb
.getDb()
.db()
.collection('contacts')
.insertOne(contact4);
res.setHeader('Content-Type', 'application/json');
res.status(201).json(response);
console.log(response);

}

module.exports = { getData, getOne, newContact }

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

/*const updateContact = async(req, res) => {
  const contactId = new ObjectId(req.params.id);
  const response = await mongodb
  .getDb()
  .db()
  .collection('contacts')
  .replaceOne({_id: contactId}, contact4);
  res.setHeader('Content-Type', 'application/json');
  //res.status(204).json(response);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Error: The contact could not be update.');
  }
};*/

/*const deleteContact = async(req, res) => {
  const response = await mongodb
  .getDb()
  .db()
  .collection('contacts')
  //.deletetOne(contact4);
  .deleteOne({ "firstName":"Rachel"});
  res.setHeader('Content-Type', 'application/json');
  res.status(201).json(response);
  console.log(response);

};*/



//module.exports = { getData };

  //updateContact, deleteContact };




/**const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('contacts').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
}; */


/**constMongoClient=require('mongodb');
 * // Server runningconsturl='mongodb://localhost:27017/';
 * // Database nameconstdatabasename="cse341";
 * MongoClient.connect(url).then((client) =>{
 * // Connecting to the databaseconstconnect=client.db(databasename);
 * // Database collectionconstcollection=connect.collection("contacts");
 * Once the connection is successful, we proceedto delete the document.
 * If we want to delete only one record, we use the deletOne() methodin this matter 
 * collection.deleteOne({ "firstName":"Rachel"});console.log("Deletion Successful");
 * })
 * .catch((err) =>{
 * // If error occurred show the erro */
/**collection.deleteOne({ "firstName":"Rachel"});
 * console.log("Deletion Successful");
 * })
 * .catch((err) =>{
 * // If error occurred show the error message
 */


/** Create a PUT route to update a contact.*/
/**const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
}; */

