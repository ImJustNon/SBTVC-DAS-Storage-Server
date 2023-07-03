const io = require('socket.io-client');
const socket = io('http://localhost:8008');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('chat message', (message) => {
  console.log('Received message:', message);
});

// Send a message to the server
socket.emit('chat message', 'Hello from the client');

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
