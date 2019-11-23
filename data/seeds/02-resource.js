
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('resource').insert([
    {  resource_name: 'bread', resource_description: 'for food', project_id: 3 },
    {  resource_name: 'water', resource_description: 'to take a shower', project_id: 2 },
    {  resource_name: 'weights', resource_description: 'to get those gains', project_id: 1 }
  ]);
};
