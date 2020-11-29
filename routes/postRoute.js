const express = require("express");
const Post = require("../models/postModal");

const route = express.Router();


route.get('/get_post', async (req, res) => {
   try {
      const posts = await Post.getAll();
      res.status(200).json(posts);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
});

route.post('/create/:user_id', async (req, res) => {
   const {user_id} = req.params;

   try {
      const postId = await Post.add(user_id, req.body);
      res.status(201).json(postId);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

route.patch("/update_post/:user_id/:post_id", async (req, res) => {
   const {user_id, post_id} = req.params;

   try {
      const updatedPost = Post.updatePost(user_id, post_id, req.body);
      res.status(200).json(updatedPost);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

route.delete("/delete_post/:user_id/:post_id", async (req, res) => {
   const {user_id, post_id} = req.params;

   try {
      const removedPost = await Post.removePost(user_id, post_id);
      res.status(200).json(removedPost);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})
 

// COMMENTS
route.post("/add_comment/:user_id/:post_id", async (req, res) => {
   const {user_id, post_id} = req.params;

   try {
      const commentId = await Post.addComment(user_id, post_id, req.body);
      res.status(201).json(commentId);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

route.patch("/update_comment/:user_id/:comment_id", async (req, res) => {
   const {user_id, comment_id} = req.params;

   try {
      const updatedComment = await Post.updateComment(user_id, comment_id, req.body);
      res.status(200).json(updatedComment);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

route.delete("/delete_comment/:user_id/:comment_id", async (req, res) => {
   const {user_id, comment_id} = req.params;

   try {
      const userDeleted = await Post.removeComment(user_id, comment_id);
      res.status(200).json(userDeleted);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

module.exports = route;
