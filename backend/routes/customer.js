const express = require('express');
const { registerCustomer, getallCustomer, getCustomer, updateCustomer,deleteCustomer,deleteAllCustomers } = require('../src/controllers/customer_controller');

const router = express.Router();
console.log("Is it coming inside");

router.post('/create', registerCustomer);
router.get('/get', getallCustomer);
router.get('/get/:name', getCustomer);
router.put('/:name', updateCustomer);
router.delete('/delete/:name', deleteCustomer); 
router.delete('/deleteall', deleteAllCustomers);


module.exports = router;
