const mongoose  = require('mongoose');

const videoSessionSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    roomId: {
        type: String,
        required: true
    },
    sessionStatus: {
        type: String,
        enum: ['Active', 'Ended'],
        default: 'Active'
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: Date
}, { timestamps: true });

module.exports = mongoose.model('VideoSession', videoSessionSchema);