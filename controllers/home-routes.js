const router = require('express').Router();
const { Post, Developer, Comment } = require('../models');


router.get('/', (req, res) => {
Post.findAll({
    include: [

        {
            model: Developer
        },
        {
            model: Comment,
           attributes: ['createdAt']
        }
    ]
})
.then(dbPostData => {
    // pass a single post object into the homepage template
    const posts = dbPostData.map(post=> post.get({ plain: true }));
    res.render('homepage', { posts });
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;