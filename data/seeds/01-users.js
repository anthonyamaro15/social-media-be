
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').insert([
        {email: "example1@gmail.com", username: "user one", password: 'passOne'},
        {email: "exmaple2@gmail.com", username: "user two", password: 'passTwo'},
        {email: "example3@gmail.com", username: "user tree", password: "passThree"}
      ]);
};
