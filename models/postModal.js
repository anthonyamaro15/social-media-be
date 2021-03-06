const db = require("../data/config-db");

// find post by id
async function findById(post_id) {
   return db("posts as p").where({"p.id":post_id});
}

// add new post and return it
async function add(user_id, post) {
   const [id] = await db("posts").insert(post, 'id');
   await db("user_post")
      .insert({post_id: id, user_id}, 'id');
   return findById(id);
}

// helper function to find user post
function findUserPost(user_id, post_id) {
   return db("posts as p")
      .join("user_post as up", "p.id", "up.post_id")
      .where({"up.user_id": user_id})
      .where({"p.id": post_id});
}

async function removePost(user_id, post_id) {
   const [post] = await findUserPost(user_id, post_id);
   return db("posts as p")
      .where("p.id", post.post_id).del();
}

async function updatePost(user_id, post_id, changes) {
   const [post] = await findUserPost(user_id, post_id);
   return db("posts as p")
      .where("p.id", post.post_id)
      .update(changes,"id");
}

// this function returns all post with post comments instead of just posts
async function getAll() {
   const posts = await db("posts");
   return Promise.all(
      posts.map(async (post) => ({
            ...post,
            username: await db("users as u")
               .join("user_post as up", "u.id", "up.user_id")
               .where({"up.post_id": post.id})
               .select("u.username")
               .first(),
            comments: await db("comments as c")
               .join("user_comment as u", "c.id", "u.comment_id")
               .where({"u.post_id": post.id})
               .select("c.id","c.comment")
         }))
   )
}

module.exports = {
   findById,
   add,
   getAll,
   removePost,
   updatePost
};
