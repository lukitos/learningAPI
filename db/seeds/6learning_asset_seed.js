
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('learning_asset').del()
    .then(function () {
      // Inserts seed entries
      return knex('learning_asset').insert([
        {learning_id: 1, asset_id: 2},
        {learning_id: 1, asset_id: 3},
        {learning_id: 2, asset_id: 1}
      ]);
    });
};
