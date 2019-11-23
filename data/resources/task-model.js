const db = require('../dbConfig.js');

module.exports = {
  getTasks,
  addTask
}

function getTasks() {
  return db('task as t')
    .join('project as p', 'project_id', 'p.id')
    .select('t.id', 'p.project_name', 'p.project_description', 't.task_description', 't.notes', 't.completed')
}

function addTask(info) {
  return db('task').insert(info)
}