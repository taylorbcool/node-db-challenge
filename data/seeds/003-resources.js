exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          name: 'Resource 1',
          description: 'description of resource 1',
        },
        {
          id: 2,
          name: 'Resource 2',
          description: 'description of resource 2',
        },
        {
          id: 3,
          name: 'Resource 3',
          description: 'description of resource 3',
        }
      ]);
    });
};