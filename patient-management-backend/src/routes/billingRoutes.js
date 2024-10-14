const express = require('express');
const { createInvoice, getInvoice, updateInvoice, deleteInvoice } = require('../controllers/billingController');
const { verifyRole } = require('../middleware/verifyRole');
const router = express.Router();

router.post('/create-invoice', verifyRole(['doctor']), createInvoice);
router.get('/', verifyRole(['doctor']), getInvoice);
router.put('/:invoiceID', verifyRole(['doctor']), updateInvoice);
router.delete('/:invoiceID', verifyRole(['doctor']), deleteInvoice);

module.exports = router;