
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('project').insert([
    { project_name: 'gym', project_description: 'go to the gym', completed: false },
    { project_name: 'shower', project_description: 'take a shower', completed: false },
    { project_name: 'eat', project_description: 'eat food', completed: true }
  ]);
};
