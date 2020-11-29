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

route.post("/add_comment/:user_id/:post_id", async (req, res) => {
   const {user_id, post_id} = req.params;

   try {
      const commentId = await Post.addComment(user_id, post_id, req.body);
      res.status(201).json(commentId);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

route.put("/update_comment/:user_id/:comment_id", async (req, res) => {
   const {user_id, comment_id} = req.params;
})

module.exports = route;
