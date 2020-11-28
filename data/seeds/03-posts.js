
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('posts').insert([
        {post: "this is a post ", like_post: false, likes_count: 0, comments_id: 1, user_id: 1},
        {post: "second example ", like_post: true, likes_count: 0, comments_id: 2, user_id: 1},
        {post: "3rd example ", like_post: false, likes_count: 0, comments_id: 3, user_id: 2},
        {post: "this is a post ", like_post: true, likes_count: 0, comments_id: 4, user_id: 1},
        {post: "this is a post ", like_post: false, likes_count: 0, comments_id: 5, user_id: 2},
        {post: "this is a post ", like_post: false, likes_count: 0, comments_id: 5, user_id: 3},
        {post: "this is a post ", like_post: true, likes_count: 0, comments_id: 6, user_id: 3},
        {post: "this is a post ", like_post: false, likes_count: 0, comments_id: 3, user_id: 2},
      ]);
};
