
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {

    table.increments(); 
    
    table.string('name', 255);
    table.string('description', 255);
    table.integer('complete', 255);
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');

};