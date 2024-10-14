const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Register a new user
const register = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, role, country, state, city } = req.body;

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user object with common fields
        const newUser = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            role,
            country,
            state,
            city,
        };

        // Add role-specific fields
        if (role === "doctor") {
            newUser.doctorDetails = {
                qualification: req.body.doctorDetails.qualification,
                specialtyType: req.body.doctorDetails.specialtyType,
                workingHours: {
                    checkupTime: req.body.doctorDetails.workingHours.checkupTime,
                    breakTime: req.body.doctorDetails.workingHours.breakTime,
                },
                experience: req.body.doctorDetails.experience,
                zipCode: req.body.doctorDetails.zipCode,
                onlineConsultationRate: req.body.doctorDetails.onlineConsultationRate,
                hospital: {
                    currentHospital: req.body.doctorDetails.hospital.currentHospital,
                    hospitalName: req.body.doctorDetails.hospital.hospitalName,
                    hospitalAddress: req.body.doctorDetails.hospital.hospitalAddress,
                    websiteLink: req.body.doctorDetails.hospital.websiteLink,
                    emergencyContactNumber: req.body.doctorDetails.hospital.emergencyContactNumber,
                },
            };
        } else if (role === "patient") {
            newUser.age = req.body.age;
            newUser.height = req.body.height;
            newUser.weight = req.body.weight;
            newUser.gender = req.body.gender;
            newUser.bloodGroup = req.body.bloodGroup;
            newUser.dateOfBirth = req.body.dateOfBirth;
            newUser.address = req.body.address;
        } else {
            return res.status(400).json({ message: 'Not registered' });
        }

        // Create the user in the database
        const user = new User(newUser);
        await user.save();
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Login
const login = async (req, res) => {
    const { emailOrPhone, password } = req.body;
    try {
        const user = await User.findOne({
            $or: [{ email: emailOrPhone }, { phoneNumber: emailOrPhone }]
        });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Forget Password
const forgetPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        //reset token
        const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'panthigopani1234@gmail.com',
                pass: 'dojg zeme ylhd hjiw',
            },
        });

        const mailOption = {
            from: 'panthigopani1234@gmail.com',
            to: email,
            subject: 'Password Reset',
            text: `You can reset your password using this link: http://localhost:3000/reset-password?token=${resetToken}`,
        }

        await transporter.sendMail(mailOption);
        res.json({ message: 'Password reset email sent' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// View patient records by their ID
const getPatientById = async (req, res) => {
    try {
        const patient = await User.findById(req.params.id);

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        if (patient.role !== 'patient') {
            return res.status(400).json({ message: 'Patient not found' });
        }

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

//Update patient records
const updatePatientRecord = async (req, res) => {
    try {
        if (req.user.role !== 'doctor') {
            return res.status(403).json({ message: 'Only doctors can update patient records' });
        }

        const patient = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.status(200).json({ message: 'Patient record updated', patient });
    } catch (error) {
        res.status(500).json({ message: 'Error updating patient record', error });
    }

}

module.exports = {
    register,
    login,
    forgetPassword,
    getPatientById,
    updatePatientRecord
}
