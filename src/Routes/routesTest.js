const router = require('express').Router();

const mongodb = require('../Database/Connections/Mongodb');
const postgresql = require('../Database/Connections/Postgresql');

router.get('/', async (req, res) => {

    var testPost;
    try {
        testPost = await postgresql.query('SELECT 1+0 AS result');
        testPost = testPost[0][0].result;
    } catch (e) {
        testPost = 0;
    }

    res.json({
        API: 'TaskList',
        Version: '1.0',
        MongoDB: mongodb.connection.readyState,
        PostgreSQL: testPost
    });
});

module.exports = router;