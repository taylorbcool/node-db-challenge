const express = require('express')

const Projects = require('./project-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Error getting projects' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  Projects.findById(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Error getting project' })
    })
})

router.post('/', (req, res) => {
  const newProject = req.body

  Projects.add(newProject)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Error creating new project' })
    })
})

router.get('/:id/tasks', (req, res) => {
  const id = req.params.id

  Projects.findTasks(id)
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Error getting tasks' })
    })
})

router.post('/:id', (req, res) => {
  const id = req.params.id
  const newTask = {
    ...req.body,
    project_id: id
  }

  Projects.addTask(newTask)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Error creating task' })
    })
})

module.exports = router