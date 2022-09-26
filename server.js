require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const http = require('http');
const server = http.createServer(app);
const { socketio } = require('./sockets/socketio');

app.use(cookieParser());
app.use(express.json());

app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/public/images/favicon.ico');
});
app.get('/room', (req, res) => {
    res.cookie('test','Hello World');
    res.sendFile(__dirname + '/public/room.html');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

socketio(server);
const port = process.env.PORT || 5656;

server.listen(port, () => console.log("server start..."));
//Welcome to LolMegle ,this is an open public opinion and discussion application . Anyone can share their opinion . (Note-Please don't use slangs ,Thank you)