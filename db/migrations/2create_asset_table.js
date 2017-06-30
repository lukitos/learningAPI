
exports.up = function(knex, Promise) {
  return knex.schema.createTable('asset', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('description');
    table.string('type');
    table.string('img_url');
    table.string('src_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('asset');
};
