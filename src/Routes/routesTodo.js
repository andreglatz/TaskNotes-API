const router = require('express').Router();
const TodoController = require('../Controllers/TodoController');

// TODO
router.get('/todos', TodoController.show);
router.post('/todos', TodoController.store);

module.exports = router;