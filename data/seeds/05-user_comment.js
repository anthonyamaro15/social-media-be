
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('user_comment').insert([
        {post_id: 1, comment_id: 2},
        {post_id: 2, comment_id: 1},
        {post_id: 6, comment_id: 5},
        {post_id: 2, comment_id: 6},
        {post_id: 2, comment_id: 3},
        {post_id: 5, comment_id: 4},

      ]);

};
