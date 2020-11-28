const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require('../models/userModal');

const route = express.Router();

// check if users already exist, if it exists return a message
// otherwise add new user
route.post('/register', async (req, res) => {
   const userInfo = req.body;
   const {email } = req.body;

   const user = await User.findBy({email});
   if(user.length) {
      return res.status(500).json({message: "User with that email already exists!."});
   }

   const ROUNDS = process.env.ROUNDS;
   const hash = bcrypt.hashSync(userInfo.password, Number(ROUNDS));
   userInfo.password = hash;

   try {
      const userId = await User.add(userInfo);
      res.status(201).json(userId);
   } catch (err) {
      res.status(500).json({errMessage: err.message});
   }
})

// login
route.post("/login", async (req,res) => {
   const {email, password} = req.body;

   try {
      const [user] = await User.findBy({email});
      if(user && bcrypt.compareSync(password, user.password)) {
         const token = generateToken(user);
         res.status(200).json({token});
   } else {
      res.status(401).json({errMessage: "invalid email or password"});
   }
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

function generateToken(user) {
   const SECRET = process.env.JWT_SECRET
   const payload = {
      user: user.email
   };
   const options = {
      expiresIn: "1h"
   };
   return jwt.sign(payload, SECRET, options);
}

module.exports = route;