
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('user_comment').insert([
        {user_id: 1,post_id: 1, comment_id: 2},
        {user_id: 1,post_id: 2, comment_id: 1},
        {user_id: 2,post_id: 6, comment_id: 5},
        {user_id:2 ,post_id: 2, comment_id: 6},
        {user_id: 3,post_id: 2, comment_id: 3},
        {user_id:3 ,post_id: 5, comment_id: 4},
      ]);
};

