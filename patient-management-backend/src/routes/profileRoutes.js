const express = require('express');
const { updateProfile, changePassword } = require('../controllers/profileController');
const {authorize} = require('../middleware/authMiddleware');
const router = express.Router();

router.put('/update', authorize, updateProfile);
router.put('/change-password',authorize,changePassword);

module.exports = router;