exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: 'Project 1',
          description: 'Project 1 description',
          completed: false
        },
        {
          id: 2,
          name: 'Project 2',
          description: 'Project 2 description',
          completed: false  
        }
      ]);
    });
};