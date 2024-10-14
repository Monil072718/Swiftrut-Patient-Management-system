const Appointment = require('../models/appointmentModel');

//create appointment 
const createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).json({ message: 'Appointment created successfully', Appointment });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//get all appointment
const getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.find();
        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//update 
const updateAppointment = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedAppointments = await Appointment.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedAppointments) return res.status(400).json({ message: 'Appointment not found' });

        res.status(200).json({ message: 'Appointment updated successfully', updatedAppointments });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//delete
const deleteAppointment = async (req, res) => {
    try {
        const id = req.params.id;

        const deleteAppointments = await Appointment.findByIdAndDelete(id);
        if (!deleteAppointments) return res.status(400).json({ message: 'Appointment not found' });

        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//appointment history
const getAppointmentHistory = async (req, res) => {
    const { email } = req.query;
    try {
        const history = await Appointment.find({ 'patient.email': email});
        if(!history.length){
            return res.status(404).json({message:'No appointments found for this user'});
        } 

        res.status(200).json(history);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createAppointment,
    getAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentHistory
}