const express = require('express');
const helmet = require('helmet');
const server = express();
const Project = require('./data/resources/project-model.js');
const Resource = require('./data/resources/resource-model.js');
server.use(helmet());
server.use(express.json());

//GET METHODS
server.get('/projects', (req, res) => {
  Project.findProjects()
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving projects.' })
    })
})

server.get('/resources', (req, res) => {
  Resource.getResources()
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving resources.' })
    })
})

server.get('/resources/:id', (req, res) => {
  const { id } = req.params;
  Resource.getResourceById(id)
    .then(response => {
      if (response) {
        res.status(200).json(response)
      } else {
        res.status(404).json({ message: 'Resource ID does not exist.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving resource. ' })
    })
})


//POST METHODS
server.post('/resources', (req, res) => {
  const info = req.body;
  Resource.addResource(info)
    .then(response => {
      res.status(201).json(response)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error adding resource' })
    })
})

module.exports = server;