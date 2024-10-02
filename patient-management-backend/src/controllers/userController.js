const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

//register a new user
const register = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, country, state, city, hospital, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ msg: "Passwords do not match" });
    }

    try {
        const user = new User({ firstName, lastName, email, phoneNumber, country, state, city, hospital, password });
        await user.save();

        res.status(201).json({ message: 'User Register' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//login
const login = async (req, res) => {
    const { emailOrPhone, password } = req.body;
    try {
        const user = await User.findOne({
            $or: [{ email: emailOrPhone }, { phoneNumber: emailOrPhone }]
        });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

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

module.exports = {
    register,
    login,
    forgetPassword
}