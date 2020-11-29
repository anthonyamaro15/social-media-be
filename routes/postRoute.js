const express = require("express");
const Post = require("../models/postModal");
const {validateIds} = require("../middlewares/postMIddleware");
const {validateUserId} = require("../middlewares/userMiddlewares");

const route = express.Router();


route.get('/get_post', async (req, res) => {
   try {
      const posts = await Post.getAll();
      res.status(200).json(posts);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
});

route.post('/create/:user_id', validateUserId, async (req, res) => {
   const {user_id} = req.params;

   try {
      const postId = await Post.add(user_id, req.body);
      res.status(201).json(postId);
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

route.patch("/update_post/:user_id/:post_id", validateIds, async (req, res) => {
   const {user_id, post_id} = req.params;

   try {
      Post.updatePost(user_id, post_id, req.body);
      res.status(200).json({message: "post updated successfully!."});
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

route.delete("/delete_post/:user_id/:post_id", validateIds, async (req, res) => {
   const {user_id, post_id} = req.params;

   try {
      await Post.removePost(user_id, post_id);
      res.status(200).json({message: "post deleted successfully!."});
   } catch (error) {
      res.status(500).json({errMessage: error.message});
   }
})

module.exports = route;
