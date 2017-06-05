const Router = require('express').Router;
const router = Router();
const Album = require('../models/album');

router

    .get('/', (req, res, next) => {
        Album.find()
            .select('-__v')
            .then(album => res.send(album))
            .catch(next);
    })

    .get('/full', (req, res, next) => {
        Album.find()
            .populate('pictures')
            .then(album => res.send(album))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Album.findById(id).lean()
            .then(album => res.send(album))
            .catch(next);
    })

    .get('/full/:id', (req, res, next) => {
        const id = req.params.id;
        Album.findById(id)
            .populate('pictures')
            .then(album => res.send(album))
            .catch(next);
    })

    .post('/', (req, res, next) => {
        new Album(req.body)
            .save()
            .then(album => res.send(album))
            .catch(next);
    })

    .put('/:id', (req, res, next) => {
        Album.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(album => res.send(album))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Album.findByIdAndRemove(req.params.id)
            .then(response => {
                res.send({ removed: response ? true : false });
            })
            .catch(next);
    });



module.exports = router;