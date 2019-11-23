const db = require('../dbConfig.js');

module.exports = {
  findProjects,
  addProject
}

function findProjects() {
  return db('project')
}

function addProject(info) {
  return db('project').insert(info)
}