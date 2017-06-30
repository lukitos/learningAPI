
exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', function (table) {
    table.increments();
    table.string('fname');
    table.string('lname').notNullable();
    table.string('mname');
    table.string('email');
    table.string('phone');
    table.string('twitter');
    table.string('linkedin');
    table.string('github');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('person');
};
