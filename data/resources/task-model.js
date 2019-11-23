const db = require('../dbConfig.js');

module.exports = {
  getTasks,
  addTask
}

function getTasks() {
  return db('task')
}

function addTask(info) {
  return db('task').insert(info)
}