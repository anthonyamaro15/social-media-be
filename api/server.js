const express = require('express');
const cors = require('cors');

const authUser = require("../routes/authUser");
const userPost = require("../routes/postRoute");

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', authUser);
server.use('/post', userPost);

module.exports = server;