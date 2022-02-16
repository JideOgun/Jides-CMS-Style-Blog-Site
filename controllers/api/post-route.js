const router = require('express').Router();
const { Developer, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
Post.findAll({
  
    include: [
        {
            model: Comment,
            include: {
                model: Developer,
                attributes: ['username']
            }
        }
    ]
    
})
.then(dbPostData => 
res.json(dbPostData))
.catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
Post.findOne({
    where: {
      id: req.params.id
    },    include: [
        {
            model: Comment,
            include: {
                model: Developer,
                attributes: ['username', 'created_at']
            }
        }
    ]
  })
.then(dbPostData => res.json(dbPostData))
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});


router.post('/',  withAuth, (req, res) => {
 // expects {post_title: 'Taskmaster goes public!', post_content: 'content', dev_id: 1}
 Post.create({
    post_title: req.body.post_title,
    post_content: req.body.post_content,
    dev_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth,  (req, res) => {
    Post.update(
        {
        post_title: req.body.post_title,
        post_content: req.body.post_content
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});


router.delete('/:id', withAuth,  (req, res) => {
    Post.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});
module.exports = router;