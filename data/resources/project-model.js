const db = require('../dbConfig.js');

module.exports = {
  findProjects
}

function findProjects() {
  return db('project')
}