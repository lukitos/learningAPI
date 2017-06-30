
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('learning_tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('learning_tag').insert([
        {learning_id: 1, tag_id: 1},
        {learning_id: 2, tag_id: 1},
        {learning_id: 3, tag_id: 2},
        {learning_id: 3, tag_id: 3},
      ]);
    });
};
