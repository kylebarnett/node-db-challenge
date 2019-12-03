const db = require('../dbConfig.js');

module.exports = {
  findProjects,
  addProject,
  deleteProject
}

function findProjects() {
  return db('project')
}

function addProject(info) {
  return db('project').insert(info)
}

function deleteProject(id) {
  return db('project').where({ id }).del()
}