const express = require('express');
const { createPrescription,getPrescription,updatePrescription,deletePrescription } = require('../controllers/prescriptionController');
const{authorize}=require('../middleware/authMiddleware');
const{verifyRole}=require('../middleware/verifyRole');
const router = express.Router();

router.post('/', verifyRole(['doctor','admin']),authorize,createPrescription);
router.get('/:patientId', verifyRole(['doctor','admin']),authorize,getPrescription);
router.put('/:patientId', verifyRole(['doctor']),authorize,updatePrescription);
router.delete('/:patientId', verifyRole(['doctor']),authorize,deletePrescription);

module.exports = router;