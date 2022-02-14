const router = require('express').Router();

const developerRoutes = require('./developer-route');
const postRoutes = require('./post-route');
const commentRoutes = require('./comment-route');

router.use('/developers', developerRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);



module.exports = router;