const router = require('express').Router();
const Album = require('../models/album');

router
  .get('/', (req, res, next) => {
    Album.find()
      .select('-__v')
      .then(album => res.send(album))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Album.create(req.body)
      .then(album => res.send(album))
      .catch(next);
  })

  .delete('/', (req, res, next) => {
    Album.findByIdAndRemove(req.body.id)
      .then(response => res.send({ removed: !!response }))
      .catch(next);
  });

module.exports = router;