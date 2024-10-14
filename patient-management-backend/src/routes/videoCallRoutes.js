const express = require('express');
const { createVideoCallSession, endVideoCallSession } = require('../controllers/videoCallController');
const {authorize} = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/',authorize,createVideoCallSession);
router.put('/end/:sessionId',authorize,endVideoCallSession);

module.exports = router;