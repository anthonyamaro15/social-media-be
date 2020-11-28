
exports.seed = function(knex) {
      return knex('comments').insert([
       {comment: "this a comment example"},
       {comment: "another example"},
       {comment: "whta bout now"},
       {comment: "this is new"},
       {comment: "check this out"},
       {comment: "not now"}
      ]);
};
