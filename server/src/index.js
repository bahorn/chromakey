/* eslint no-console: 0 */
const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.json());


io.on('connection', () => {
  console.log('a user connected');
});


app.post('/', (req, res) => {
  if (req.body.url) {
    io.emit('newtab', { url: req.body.url });
    res.send(req.body.url);
  }
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
