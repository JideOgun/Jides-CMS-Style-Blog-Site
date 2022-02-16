const router = require('express').Router();
const { Post, Developer, Comment } = require('../models');


router.get('/', (req, res) => {
    console.log(req.session);
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


router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
res.render('login');
});


router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }, 
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'createdAt'],
                include: {
                    model: Developer,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        // serializing data
    const post = dbPostData.get({ plain: true });

    res.render('single-post', { post });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
});

});



module.exports = router;