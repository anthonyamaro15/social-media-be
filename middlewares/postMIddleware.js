const Post = require("../models/postModal");
const User = require("../models/userModal");

async function validateIds(req, res, next) {
   const {user_id, post_id} = req.params;

   const user = await User.findById(user_id);
   const post = await Post.findById(post_id);

   if(!user.length || !post.length) {
      return res.status(404).json({errMessage: "Please enter valid IDs"});
   } else {
      next();
   }
}

module.exports = {
   validateIds
};
