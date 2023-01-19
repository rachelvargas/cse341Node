const express = require('express');
const router = express.Router();

//router.use("/", require("./swagger.js"));
router.use('/contacts', require('./contacts.js'));
router.use('/', require('./swagger'))


module.exports = router;