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
Developer.findOne()
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

}).then({
username: req.body.username,
password: req.body.password,
email: req.body.password
}).then(dbDevData => {
     res.json(dbDevData);
})
.catch(err => {
console.log(err);
res.status(500).json(err);
});
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