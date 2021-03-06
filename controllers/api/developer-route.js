const router = require('express').Router();

const { Developer, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
Developer.findAll()
.then(dbDevData => res.json(dbDevData))
.catch(err => {
    res.status(500).json(err);
});
});

router.get('/:id', (req, res) => {
Developer.findOne({
  attributes: { exclude: ['password']},
  where: {
    id: req.params.id
  },
  include: [
    {
      model: Post
    },
    {
      model: Comment
    }
  ]
})
.then(dbDevData => {
    if (!dbDevData) {
        res.status(404).json({ message: 'No developer found with this id' });
        return;
      }
      res.json(dbDevData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
Developer.create({
username: req.body.username,
email: req.body.email,
password: req.body.password
}).then(dbDevData => {

  req.session.save(() => {
    req.session.user_id = dbDevData.id;
    req.session.username = dbDevData.username;
    req.session.loggedIn = true;
  });
     res.json(dbDevData);
})
.catch(err => {
console.log(err);
res.status(500).json(err);
});
});


// Login Post Route 
router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  Developer.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbDevData => {
    if (!dbDevData) {
      res.status(400).json({ message: 'No Developer with that email address!' });
      return;
    }

    const validPassword = dbDevData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      // decalring session variables
      req.session.user_id = dbDevData.id;
      req.session.username = dbDevData.username;
      req.session.loggedIn = true;

      res.json({ user: dbDevData, message: 'You are now logged in!' });
    });
    
  });
});

router.post('/logout', (req, res) => {
 if(req.session.loggedIn) {
   req.session.destroy(() => {
     res.status(204).end();
   });
 } else {
   res.status(404).end();
 }
});

router.put('/:id', (req, res) => {
    Developer.update(req.body, {
        where: {
          id: req.params.id
        }
      })
        .then(dbDeveloperData => {
          if (!dbDeveloperData[0]) {
            res.status(404).json({ message: 'No Developer found with this id' });
            return;
          }
          res.json(dbDeveloperData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});


router.delete('/:id', (req, res) => {
    Developer.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbDeveloperData => {
          if (!dbDeveloperData) {
            res.status(404).json({ message: 'No Developer found with this id' });
            return;
          }
          res.json(dbDeveloperData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});



module.exports = router;