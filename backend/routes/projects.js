const express = require('express');
const Project = require('../models/project');
const router = express.Router();

// @desc    Get all projects
// @route   GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Add a new project
// @route   POST /api/projects
router.post('/', async (req, res) => {
  const { title, description, link } = req.body;
  try {
    const newProject = new Project({ title, description, link });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add project' });
  }
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    await project.remove();
    res.json({ message: 'Project removed' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete project' });
  }
});

module.exports = router;