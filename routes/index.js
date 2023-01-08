const express = require('express');
const router = express.Router();


router.use('/', require('./contacts.js'))

module.exports = router;