const express = require('express');
const { register, login, forgetPassword, getPatientById, updatePatientRecord } = require('../controllers/userController');
const { verifyRole } = require('../middleware/verifyRole');
const { authorize } = require('../middleware/authMiddleware');
const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgetPassword);
router.get('/:id', verifyRole(['doctor', 'admin']), authorize, getPatientById);
router.put('/:id', verifyRole(['doctor', 'admin']), authorize, updatePatientRecord);

module.exports = router;