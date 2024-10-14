const VideoSession = require('../models/videoSessionModel');
const { v4: uuidv4 } = require('uuid');

//create video call session
const createVideoCallSession = async (req, res) => {
    const { doctorId, patientId } = req.body;
    try {
        const roomId = uuidv4;

        const newSession = new VideoSession({
            doctorId,
            patientId,
            roomId
        });

        await newSession.save();
        res.status(201).json({ message: 'Video call session created successfully', roomId: newSession.roomId });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//end video call session
const endVideoCallSession = async (req, res) => {
    const { sessionId } = req.params;
    try {
        const session = await VideoSession.findByIdAndUpdate(sessionId, { sessionStatus: 'Ended', endTime: Date.now() }, { new: true });

        if (!session) return res.status(404).json({ message: 'Session not found' });

        res.status(200).json({ message: 'Video session ended', session });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createVideoCallSession,
    endVideoCallSession
}