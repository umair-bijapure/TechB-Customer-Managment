const express = require('express');
const { registerCustomer, getallCustomer, getCustomer, updateCustomer } = require('../src/controllers/customer_controller');

const router = express.Router();
console.log("Is it coming inside");

router.post('/create', registerCustomer);
router.get('/get', getallCustomer);
router.get('/:username', getCustomer);
router.put('/:username', updateCustomer);

module.exports = router;
