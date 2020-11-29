const db = require("../data/config-db");

// find comment by id
function findById(comment_id) {
   return db("comments as c").where({"c.id": comment_id})
}
async function addComment(user_id, post_id, comment) {
   const [id] = await db('comments').insert(comment, 'id');
   const userCommentBody = {user_id, post_id, comment_id: id};
   await db("user_comment")
      .insert(userCommentBody, 'id');
   return findById(id);
}

// helper function to find user comment
function findUserComments(user_id, comment_id) {
   return  db("comments as c")
      .join("user_comment as uc", "c.id", "uc.comment_id")
      .where({"uc.user_id": user_id})
      .where({"uc.comment_id": comment_id});
}

async function removeComment(user_id, comment_id) {
   const [comment] = await findUserComments(user_id, comment_id);
   return db("comments as c")
      .where("c.id", comment.id).del();
}

async function updateComment(user_id, comment_id, changes) {
   const [comment] = await findUserComments(user_id, comment_id);
   return db("comments as c")
      .where("c.id", comment.id)
      .update(changes);
}

module.exports = {
   findById,
   addComment,
   removeComment,
   updateComment
}