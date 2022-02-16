const router = require('express').Router();
const sequelize = require('../config/connection');
const { Developer, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            // usuing the ID from the session
            dev_id: req.session.user_id
        },
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'dev_id', 'createdAt'],
                include: {
                    model: Developer,
                    attributes: ['username']
                }
            },
            {
                model: Developer,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        // serializing data before passing it to the template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedin: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
        include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'dev_id', 'created_at'],
              include: {
                model: Developer,
                attributes: ['username']
              }
            },
            {
              model: Developer,
              attributes: ['username']
            }
          ]
    })
    .then(dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
            
            res.render('edit-post', {
              post,
              loggedIn: true
            });
          } else {
            res.status(404).end();
          }
        })
        .catch(err => {
          res.status(500).json(err);
        });  
    });



module.exports = router;