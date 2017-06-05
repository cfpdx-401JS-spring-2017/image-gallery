const Router = require('express').Router;
const router = Router();
const Picture = require('../models/picture');

router

    .get('/', (req, res, next) => {
        Picture.find()
            .select('-__v')
            .then(picture => res.send(picture))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Picture.findById(id).lean()
            .then(picture => res.send(picture))
            .catch(next);
    })

    .post('/', (req, res, next) => {
        new Picture(req.body)
            .save()
            .then(picture => res.send(picture))
            .catch(next);
    })

    .put('/:id', (req, res, next) => {
        Picture.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(picture => res.send(picture))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Picture.findByIdAndRemove(req.params.id)
            .then(response => {
                res.send({ removed: response ? true : false });
            })
            .catch(next);
    });



module.exports = router;