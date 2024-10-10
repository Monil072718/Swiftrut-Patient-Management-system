const express = require('express');
const { processPayment,getPayment,updatePayment,deletePayment } = require('../controllers/paymentController');
const { verifyRole } = require('../middleware/verifyRole');
const router = express.Router();

router.post('/process-payment', verifyRole(['admin']), processPayment);
router.get('/', verifyRole(['admin']), getPayment);
router.put('/:paymentId', verifyRole(['admin']), updatePayment);
router.delete('/:paymentId', verifyRole(['admin']), deletePayment);

module.exports = router;
