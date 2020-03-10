const router = require('express').Router();
const TaskController = require('../Controllers/TaskController');

// Task
router.get('/tasks', TaskController.show);
router.post('/tasks', TaskController.store);
router.put('/tasks', TaskController.update);

module.exports = router;