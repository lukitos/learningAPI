
exports.up = function(knex, Promise) {
  return knex.schema.createTable('learning', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.text('description');
    table.integer('author_id').references('id').inTable('person');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('learning');
};
