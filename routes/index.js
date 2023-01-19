const express = require('express');
const router = express.Router();

//router.use("/", require("./swagger.js"));
router.use('/contacts', require('./contacts.js'));
<<<<<<< HEAD
router.use('/', require('./swagger'))

=======
router.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'http://localhost:8080/api-docs',
      };
      res.send(docData);
    })
  );
>>>>>>> 166c6fd39c494aab091d9e69e580800f236a27b1

module.exports = router;
