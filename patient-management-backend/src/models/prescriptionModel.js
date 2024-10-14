const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        medicines: [
            {
                name: { type: String, required: true },
                strength: { type: String, required: true },
                dose: { type: String, required: true },
                duration: { type: String, required: true },
                whenToTake: { type: String, enum: ["Before Food", "With Food", "After food"], required: true },
            },
        ],
        notes: { type: String },
        date: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Prescription', prescriptionSchema);