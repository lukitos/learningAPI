
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('learning').del()
    .then(function () {
      // Inserts seed entries
      return knex('learning').insert([
        {name: 'JavaScript Beginner', description: 'Getting started with JavaScript without any experience', author_id: 1},
        {name: 'JavaScript Advanced', description: 'Deep dive into JavaScript', author_id: 2},
        {name: 'HTML and CSS Beginner', description: 'Getting started with HTML and CSS without any experience', author_id: 1}
      ]);
    });
};
