const router = require('express').Router();
const Album = require('../models/album');

router
  .get('/', (req, res, next) => {
    Album.find()
      .select('-__v')
      .then(albums => res.send(albums))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Album.create(req.body)
      .then(album => res.send(album))
      .catch(next);
  })

  .post('/:id/images', (req, res, next) => {
    const id = req.params.id;
    Album.findByIdAndUpdate(id, { $push: { images: req.body } }, { new: true })
      .then(album => res.send(album.images[albums.images.length -1]))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.body.id)
      .then(response => res.send({ removed: !!response }))
      .catch(next);
  })

  .delete('/:id/images/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.body.id)
      .then(response => res.send({ removed: !!response }))
      .catch(next);
  });

module.exports = router;