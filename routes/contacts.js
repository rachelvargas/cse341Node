const express = require('express');
const router = express.Router();

const contactController = require('../controller/contacts');
router.get('/', contactController.getData);

router.get('/:id', contactController.getOne);

router.get('/', contactController.newContact);

//router.get('/:id', contactController.updateContact);

//router.get('/:id', contactController.deleteContact);

module.exports = router;