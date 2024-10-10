const Prescription = require('../models/prescriptionModel');

//create a Prescription 
const createPrescription = async (req, res) => {
    const { doctorId, patientId, medicines, notes } = req.body;
    try {
        const doctor = await User.findById(doctorId);
        const patient = await User.findById(patientId);

        if (!doctor || doctor.role !== 'doctor') {
            return res.status(400).json({ message: 'Invalid doctor ID' });
        }
        if (!patient || patient.role !== 'patient') {
            return res.status(400).json({ message: 'Invalid patient ID' });
        }
        const prescription = new Prescription({
            doctorId,
            patientId,
            medicines,
            notes
        });
        await prescription.save();
        res.status(201).json({ message: 'Prescription created', prescription });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//get Prescription 
const getPrescription = async (req, res) => {
    const { patientId } = req.params;
    try {
        const prescription = await Prescription.findById(patientId).populate('doctorId', 'firstname lastname');

        res.status(200).json(prescription);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//update Prescription
const updatePrescription = async (req, res) => {
    const { patientId } = req.params;
    try {
        const prescription = await Prescription.findByIdAndUpdate(patientId, req.body, { new: true, runValidators: true });
        if (!prescription) return res.status(400).json({ message: 'Prescription not update' });

        res.status(200).json({ message: 'Prescription updated', prescription });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//delete Prescription
const deletePrescription = async (req, res) => {
    const { patientId } = req.params;
    try {
        const prescription = await Prescription.findByIdAndDelete(patientId);
        if (!prescription) return res.status(400).json({ message: 'Prescription not delete' });

        res.status(200).json({ message: 'Prescription deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createPrescription,
    getPrescription,
    updatePrescription,
    deletePrescription
}