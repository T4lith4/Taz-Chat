const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

//import functions from user.js
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

///import router
const router = require('./router');

const app = express();
//create server
const server = http.createServer(app);
//store socket server in variable
const io = socketio(server);

//enable requests
app.use(cors());
//enable router
app.use(router);

//on socket connection
io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);
    //join the user to the room
    socket.join(user.room);
    //welcome the user through the admin with a message
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    //broadcast a message to users in the chatroom the the user has joined
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined` });
    //update the users in the room
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    //error handling
    callback();
  });

  //on socket sendMessage
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    //display the uer name and message in the chatroom
    io.to(user.room).emit('message', { user: user.name, text: message });
    //error handling
    callback();
  });

  //on socket disconnection
  socket.on('disconnect', () => {
    //remove user by id
    const user = removeUser(socket.id);

    if(user) {
      //if there is a user being removed, broadcast message in chatroom that the user has left 
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      //   and update the users in the chatroom
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

//set server up to listen on port 5000
server.listen(process.env.PORT || 5000, () => console.log(`Server has started on port 5000`));
