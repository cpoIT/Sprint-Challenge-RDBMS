
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {

    table.increments('id'); 
    
    table.string('name', 255);
    table.string('details', 255);
    table.integer('finished');
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');

};
