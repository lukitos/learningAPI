
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tag', function (table) {
    table.increments();
    table.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tag');
};
