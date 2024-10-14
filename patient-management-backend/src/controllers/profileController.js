const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

//profile update
const updateProfile = async (req, res) => {
    try {
        const { userId, updates } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
}

//change password
const changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    try {
        const user = await User.findById(req.user.id);

        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Current password is incorrect' });

        if (await bcrypt.compare(newPassword, user.password)) {
            return res.status(400).json({ message: 'New password must be different from the current password' });
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);

        await user.save();
        res.status(200).json({ message: 'Password changed successfully', user });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    updateProfile,
    changePassword
}