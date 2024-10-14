const socketIo = require('socket.io');

const socketHandler = (server) => {
    const io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log('A user connected', socket.id);

        // Join a room
        socket.on('joinRoom', ({ roomId }) => {
            socket.join(roomId);
            console.log(`User joined room: ${roomId}`);
        });

        // Handle incoming messages
        socket.on('message', ({ roomId, message, sender }) => {
            io.to(roomId).emit('message', { message, sender });
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};

module.exports = socketHandler;
