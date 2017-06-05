const Router = require('express').Router;
const router = Router();
const Album = require('../models/Album');

router
  .get('/', (req, res, next) => {
    Album.find()
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const id = req.params.id;

    Album.findById(id)
      .then(album => {
        if (!album) return res.status(404).send(`${id} is not a function`);
        else res.send(album);
      })
      .catch(next);
  })

  .post('/', (req, res, next) => {
    new Album(req.body)
      .save()
      .then(album => res.send(album))
      .catch(next);
  })

  .post('/:id/images', (req, res, next) => {
    const id = req.params.id;
    Album.findByIdAndUpdate(id, { $push: { images: req.body } }, { new: true })
      .then(album => {
        res.send(album.images[album.images.length - 1]);
      })
      .catch(next);
  })

  .delete('/:id/images/:imageId', (req, res, next) => {
    const id = req.params.id;
    Album.findByIdAndUpdate(id, { $pull: { images: { _id: req.params.imageId } } })
      .then(() => {
        res.send({ removed: true });
      })
      .catch(next);
  });

module.exports = router;