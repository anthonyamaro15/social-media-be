const express = require('express');
const cors = require('cors');

const authUser = require("../routes/authUser");

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', authUser);

module.exports = server;