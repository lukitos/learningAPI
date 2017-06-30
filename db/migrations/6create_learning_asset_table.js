
exports.up = function(knex, Promise) {
  return knex.schema.createTable('learning_asset', function (table) {
    table.increments();
    table.integer('learning_id').references('id').inTable('learning');
    table.integer('asset_id').references('id').inTable('asset');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('learning_asset');
};
