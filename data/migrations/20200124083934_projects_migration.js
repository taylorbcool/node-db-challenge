
exports.up = function(knex) {
  return knex.schema

  .createTable('projects', tbl => {
    tbl.increments()

    tbl.string('name', 128)
      .notNullable()
      .index()

    tbl.string('description', 255)

    tbl.boolean('completed')
      .notNullable()

  })

  .createTable('tasks', tbl => {
    tbl.increments()

    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.string('name', 128)
      .notNullable()
      .index()

    tbl.string('description', 255)
      .notNullable()

    tbl.string('notes', 255)

    tbl.boolean('completed')
      .notNullable()

  })

  .createTable('resources', tbl => {
    tbl.increments()

    tbl.string('name', 255)
      .notNullable()
      .index()

    tbl.string('description', 255)
  })

  .createTable('project_resources', tbl => {
    tbl.increments()

    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
