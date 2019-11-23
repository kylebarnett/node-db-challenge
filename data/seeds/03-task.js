
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('task').insert([
    { task_description: 'need to take a shower', notes: 'make sure to wash hair', completed: false, project_id: 2 },
    { task_description: 'need to eat food', notes: 'make sure to eat food', completed: true, project_id: 3 },
    { task_description: 'need to go to the gym', notes: 'go lift weights', completed: false, project_id: 1 }
  ]);
};
