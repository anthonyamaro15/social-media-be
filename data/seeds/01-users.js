
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').insert([
        {email: "example1@gmail.com", password: 'passOne'},
        {email: "exmaple2@gmail.com", password: 'passTwo'},
        {email: "example3@gmail.com", password: "passThree"}
      ]);
};
