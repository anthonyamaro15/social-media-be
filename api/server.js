const express = require('express');
const cors = require('cors');

const authUser = require("../routes/authUser");
const userPost = require("../routes/postRoute");
const postComment = require("../routes/commentsRoute");

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', authUser);
server.use('/post', userPost);
server.use("/comment", postComment);

module.exports = server;
