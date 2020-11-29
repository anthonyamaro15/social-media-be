const express = require("express");
const Comment = require("../models/commentModal");
// const {validateCommentIds} = require("../middlewares/commentMiddleware");

const route = express.Router();


route.post("/add_comment/:user_id/:post_id",  async (req, res) => {
   const {user_id, post_id} = req.params;

   try {
      const commentId = await Comment.addComment(user_id, post_id, req.body);
      res.status(201).json(commentId);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

route.patch("/update_comment/:user_id/:comment_id",  async (req, res) => {

   const {user_id, comment_id} = req.params;

   try {
      Comment.updateComment(user_id, comment_id, req.body);
      res.status(200).json({message: "comment updated successfully!."});
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

route.delete("/delete_comment/:user_id/:comment_id", async (req, res) => {

   const {user_id, comment_id} = req.params;

   try {
      Comment.removeComment(user_id, comment_id);
      res.status(200).json({message: "comment deleted successfully!."});
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
});

module.exports = route;
