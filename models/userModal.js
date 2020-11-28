const db = require('../data/config-db');


function add(user) {
   return db('users').insert(user, 'id');
}

function getAll() {
   return db("users");
}

function findBy(filter) {
   return db("users").where(filter);
}

function findById(id) {
   return db("users").where({id});
}
function update(id, changes) {
   return db('users').where({id}).update(changes);
}

function removeUser(id) {
   return db("users").where({id}).del();
}

module.exports = {
   add,
   getAll,
   findBy,
   findById,
   update,
   removeUser
};