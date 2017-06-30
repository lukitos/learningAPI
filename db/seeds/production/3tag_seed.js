
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('tag').insert([
        {name: 'javascript'},
        {name: 'html'},
        {name: 'css'},
        {name: 'bootstrap'},
        {name: 'react'},
        {name: 'angularjs'},
        {name: 'angular2'},
        {name: 'postgresql'},
        {name: 'mongodb'}
      ]);
    });
};
