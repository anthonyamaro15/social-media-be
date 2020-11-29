const User = require("../models/userModal");
const Comment = require('../models/commentModal');

async function validateCommentIds(req, res, next) {
   const {user_id, comment_id} = req.params;

   const user = await User.findById(user_id);
   const comment = await Comment.findById(comment_id);

   if(!user.length || !comment.length) {
      return res.status(404).json({errMessage: "Please enter valid IDs."});
   } else {
      next();
   }
}

module.exports = {
   validateCommentIds
};
