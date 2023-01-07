/**Call Mongodb and return the data */
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getData = async(req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); 
    console.log(lists);
  });
};



/*const getOne = async(req, res, next) => {
    const contacId = new ObjectId(req.params.id);
    const result = await mongodb 
    .getDb()
    .db()
    .collection('contacts')
    .find({_id: contactId});
    result.toArray().then((lists) => {
        res.setHeader('Content Type', 'application/json');
    });
};*/

module.exports = { getData };
//module.exports = { getData, getOne };