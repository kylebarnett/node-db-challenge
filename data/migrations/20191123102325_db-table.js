
exports.up = function (knex) {
  return knex.schema.createTable('project', tbl => {
    tbl.increments();
    tbl.string('project_name', 128).notNullable();
    tbl.string('project_description', 300);
    tbl.boolean('completed').notNullable().defaultTo(false)
  })
    .createTable('resource', tbl => {
      tbl.increments();
      tbl.string('resource_name', 128).unique().notNullable();
      tbl.string('resource_description', 300);
      tbl.integer('project_id').unsigned().notNullable().references('id').inTable('project').onDelete('CASCADE').onUpdate('CASCADE');
    })
    .createTable('task', tbl => {
      tbl.increments();
      tbl.string('task_description', 300).notNullable();
      tbl.string('notes', 300);
      tbl.boolean('completed').notNullable().defaultTo(false);
      tbl.integer('project_id').unsigned().notNullable().references('id').inTable('project').onDelete('CASCADE').onUpdate('CASCADE');
    })
    .createTable('project_resource', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function (knex) {
  return knex.schema
  dropTableIfExists('project_resource')
  dropTableIfExists('task')
  dropTableIfExists('resource')
  dropTableIfExists('project')
};
