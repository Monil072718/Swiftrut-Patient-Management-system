const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  specialty: {
    type: String,
    required: true,
    enum: ["Cardiology", "Dermatology", "Neurology", "Orthopedics", "Pediatrics", "Radiology", "Other"], // example options
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  appointmentType: {
    type: String,
    required: true,
    enum: ["In-person", "Telemedicine", "Home visit"], // example options
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
  patient: {
    name: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  notes: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
