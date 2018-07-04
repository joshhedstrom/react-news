const router = require('express').Router();
const articleRoutes = require('./books');

router.use('/articles', articleRoutes);

module.exports = router;
