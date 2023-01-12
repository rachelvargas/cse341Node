const express = require('express');
const router = express.Router();

const contactController = require('../controller/contacts');
router.get('/', contactController.getData);

router.get('/:id', contactController.getOne);

router.post('/', contactController.newContact);

router.put('/:id', contactController.updateContact);

router.delete('/:id', contactController.deleteContact);

module.exports = router;