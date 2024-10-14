const express = require("express");
const { createAppointment ,getAppointment,updateAppointment ,deleteAppointment,getAppointmentHistory} = require('../controllers/appointmentController');
const {authorize} = require('../middleware/authMiddleware');
const {verifyRole} = require('../middleware/verifyRole');
const router = express.Router();

router.post('/', verifyRole(['doctor']), authorize, createAppointment);
router.get('/', verifyRole(['doctor','admin']),authorize,getAppointment);
router.put('/:id', verifyRole(['doctor']),authorize,updateAppointment);
router.delete('/:id', verifyRole(['doctor']),authorize,deleteAppointment);
router.get('/history', verifyRole(['doctor','admin']),getAppointmentHistory);

module.exports = router;