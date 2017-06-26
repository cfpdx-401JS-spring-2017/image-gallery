const Router = require('express').Router;
const router = Router();
const Image = require('../models/image');

router

.get('/api/images',(res, req, next) => {
  Image.find()
    .then(images => res.send(images))
    .catch(next);
})

.get('/id', (req, res, next) => {
  const id = req.params.id;
  Image.findById(id)
    .then(image => res.send(image))
    .catch(next);
})

.post('/', (req, res, next) => {
  new Image(req.body)
    .save()
    .then(image => res.send(image))
    .catch(next);
})

.put('/id', (req, res, next) => {
  Image.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(image => res.send(image))
    .catch(next);
})

.delete('./id', (req, res, next) => {
  Image.findByIdAndRemove(req.params.id)
    .then(response => {
      res.send({removed: response ? true : false });
    })
    .catch(next);
});

module.exports = router;
