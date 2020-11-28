
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('posts').insert([
        {post: "this is a post ", like_post: false, likes_count: 0},
        {post: "second example ", like_post: true, likes_count: 0},
        {post: "3rd example ", like_post: false, likes_count: 0},
        {post: "this is a post ", like_post: true, likes_count: 0},
        {post: "this is a post ", like_post: false, likes_count: 0},
        {post: "this is a post ", like_post: false, likes_count: 0},
        {post: "this is a post ", like_post: true, likes_count: 0},
        {post: "this is a post ", like_post: false, likes_count: 0},
      ]);
};
