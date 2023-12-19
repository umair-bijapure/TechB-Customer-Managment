const express = require('express');
const {registerCustomer, getallCustomer, getCustomer, updateCustomer } = require('../src/controllers/customer_controller');

const router = express.Router();

 // Place this route before the username route
 router.post('/user', registerCustomer);
router.get('/:username', getCustomer);
router.get('/', getallCustomer);

router.put('/:username', updateCustomer);


module.exports = router;
