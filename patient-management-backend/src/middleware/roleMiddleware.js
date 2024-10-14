// Middleware to check user roles
const protect = (roles) => {
    return (req, res, next) => {
        // Ensure user is authenticated first
        if (!req.user) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        // Check if the user's role is allowed
        if (roles && !roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
};

module.exports = { protect };
