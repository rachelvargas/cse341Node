const express = require('express');
const router = express.Router();

const contactController = require('../controller/contacts');
router.get('/', contactController.getData);

router.get('/:id', contactController.getOne);

module.exports = router;