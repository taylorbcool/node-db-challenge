exports.seed = function(knex) {
  return knex('project_resources').del()
    .then(function () {
      return knex('project_resources').insert([
        {
          id: 1,
          project_id: 1,
          resource_id: 1
        },
        {
          id: 2,
          project_id: 2,
          resource_id: 1
        },
        {
          id: 3,
          project_id: 1,
          resource_id: 2
        },
        {
          id: 4,
          project_id: 2,
          resource_id: 3
        }
      ])
    })
}