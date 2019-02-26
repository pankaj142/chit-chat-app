const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.PORT || 3000;

const PublicPath = path.join(__dirname, '../public');
const app = express(); //app- express server
const server = http.createServer(app); //server- http server
//socket is build on http
const io = socketIO(server); //io- web socket server

io.on('connection', (socket)=>{
    console.log('New User connected.');
    socket.on('disconnect', ()=>{
        console.log('User was disconnected.')
    })
});

//middlewares
app.use(express.static(PublicPath));

server.listen(port, ()=>{
    console.log(`Server is Up on port ${port}`);
});

//about sockets

//expres server is configed using socket.io to allow for incomming web socket connections 
//server able to accept connections, and client is able to make connections 
//then persistent connection established
//then client and server can send data to and forth on the connection (data can be send in either direction)
//both client and server can emit events.
//if server goes down then client tries to reconnect to server by making continuous network calls.