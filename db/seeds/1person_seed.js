
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
        {fname: 'John', lname: 'Doe', email: 'jdoe@gmail.com'},
        {fname: 'Sam', lname: 'Day', email: 'sday@gmail.com'},
        {fname: 'Betty', lname: 'Smith', email: 'bsmith@gmail.com'},
      ]);
    });
};
