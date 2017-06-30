
exports.up = function(knex, Promise) {
  return knex.schema.createTable('learning_tag', function (table) {
    table.increments();
    table.integer('learning_id').references('id').inTable('learning');
    table.integer('tag_id').references('id').inTable('tag');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('learning_tag');
};
