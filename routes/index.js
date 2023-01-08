const express = require('express');
const router = express.Router();


router.use('/', require('./contacts.json'))

module.exports = router;