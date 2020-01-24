exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          description: 'First task of Project 1',
          notes: 'notes for task 1, project 1',
          completed: false
        },
        {
          id: 2,
          project_id: 2,
          description: 'First task of Project 2',
          notes: 'notes for task 1, project 2',
          completed: false
        },
        {
          id: 3,
          project_id: 1,
          description: 'Second task of Project 1',
          notes: 'notes for task 2, peoject 1',
          completed: false
        }
      ]);
    });
};