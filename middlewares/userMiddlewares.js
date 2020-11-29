const User = require('../models/userModal');

function validateBody(req, res, next) {
   const {email, password} = req.body;

   if(!email || !password) {
      res.status(500).json({errMessage: "Please enter require fields."});
   } else {
      next();
   }
}

async function validateUserId(req, res, next) {
   const {user_id} = req.params;

   const user = await User.findById(user_id);
   if(!user.length) {
      res.status(404).json({errMessage: "Please enter a valid ID"});
   } else {
      next();
   }
}

module.exports = {
   validateBody,
   validateUserId
}
