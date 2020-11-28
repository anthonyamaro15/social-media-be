exports.up = function(knex) {
   return knex.schema.createTable("users",table => {
      table.increments();
      table.string('email',255).notNullable();
      table.string("password", 128).notNullable();
   })
   .createTable("comments", table => {
      table.increments();
      table.string("comment",255);
   })
   .createTable("posts", table => {
      table.increments();
      table.string("post");
      table.boolean("like_post").defaultTo(false);
      table.integer('likes_count');
   })
   .createTable("user_post", table => {
      table.increments();
      table.integer("post_id").notNullable().references("posts.id").onUpdate("CASCADE").onDelete("CASCADE");
      table.integer("user_id").notNullable().references("users.id").onUpdate("CASCADE").onDelete("CASCADE");
   })
   .createTable("user_comment", table => {
      table.increments();
      table.integer("post_id").notNullable().references("posts.id").onUpdate("CASCADE").onDelete("CASCADE");
      table.integer("comment_id").notNullable().references("comments.id").onUpdate("CASCADE").onDelete("CASCADE");
   })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user_comment").dropTableIfExists("user_post").dropTableIfExists("posts").dropTableIfExists('comments').dropTableIfExists("users");
};
