const db = require('../dbConfig.js');

module.exports = {
  getResources,
  getResourceById,
  addResource
}

function getResources() {
  return db('resource')
}

function getResourceById(id) {
  return db('resource').where({ id })
}

function addResource(info) {
  return db('resource').insert(info)
}