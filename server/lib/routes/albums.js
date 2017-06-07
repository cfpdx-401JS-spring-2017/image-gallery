const router = require('express').Router();
const Album = require('../models/album');

router
  .get('/', (req, res, next) => {
    Album.find()
      .select('-__v')
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const id = req.params.id;

    Album.findById(id)
      .select('-__v')
      .then(album => {
        if (!album) return res.status(404).send(`Error: album with ${id} doesn't exist`);
        else res.send(album);
      })
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
      .then(album => res.send(album.images[album.images.length - 1]))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
      .then(response => res.send({ removed: !!response }))
      .catch(next);
  })

  .delete('/:id/images/:imageId', (req, res, next) => {
    Album.findByIdAndUpdate(req.params.id,
      {$pull: { images: { _id: req.params.imageId } }})
      .then(response => res.send({ removed: !!response[1] }))
      .catch(next);
  });

module.exports = router;