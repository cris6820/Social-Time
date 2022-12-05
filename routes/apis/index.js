const router = require('express').Router();
const courseRoutes = require('./r-toughts');
const studentRoutes = require('./r-user');

router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;
