/* eslint no-console: 0 */
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('newtab', { url: 'https://facebook.com/' });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});