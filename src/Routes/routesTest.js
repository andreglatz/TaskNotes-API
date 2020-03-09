const router = require('express').Router();

const mongodb = require('../Database/Connections/Mongodb');
const postgresql = require('../Database/Connections/Postgresql');

router.get('/', async (req, res) => {

    const testPost = await postgresql.query('SELECT 1+0 AS result');

    res.json({
        API: 'TodoList',
        Version: '1.0',
        MongoDB: mongodb.connection.readyState,
        PostgreSQL: testPost[0][0].result
    });
});

module.exports = router;