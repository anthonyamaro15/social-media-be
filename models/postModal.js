const db = require("../data/config-db");


async function add(user_id, post) {
   const [id] = await db("posts").insert(post, 'id');
   const postId = await db("user_post").insert({post_id: id, user_id}, 'id');
   return postId;
}

async function addComment(user_id, post_id, comment) {
   const [id] = await db('comments').insert(comment, 'id');
   const userCommentBody = {user_id, post_id, comment_id: id};
   const commentId = await db("user_comment").insert(userCommentBody, 'id');
   return commentId;
}

async function getAll() {
   const posts = await db("posts");
   return Promise.all(
      posts.map(async (post) => ({
            ...post,
            comments: await db("comments as c").join("user_comment as u", "c.id", "u.comment_id").where({"u.post_id": post.id})
         }))
   )
}

module.exports = {
   add,
   getAll,
   addComment
};
