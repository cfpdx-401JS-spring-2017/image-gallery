const Router = require('express').Router;
const router = Router();
const Album = require('../models/album');
// const Image = require('../models.image');

router
    .get('/', (req, res, next) => {
        Album.find()
            .lean()
            .select('-__v')
            .then(albums => res.send(albums))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Album.findById(id).lean()
            .then(album => {
                if (!album) res.status(404).send(`${id} not found`);
                else res.send(album);
            })
            .catch(next);
    })
    .post('/', (req, res, next) => {
        new Album(req.body)
        .save()
        .then(album => 
            res.send(album))
        .catch(next);
    })


    .delete('/:albumId', (req, res, next) => {
        Album.findByIdAndRemove(req.params.albumId)
            .then(() => {
                res.send({ removed: true});
            })
            .catch(next);

    })

    .post('/:albumId/images', (req, res, next) => {
        Album.findByIdAndUpdate(req.params.albumId,
            { $push: { images: req.body } }, { new: true })
            .then(album => res.send(album))
            .catch(next);
    })

    .patch('/:albumId/remove/:imageId', (req, res, next) => {
        Album.findByIdAndUpdate(req.params.albumId,
            { $pull: { 'images': {'_id': req.params.imageId } } }, { new: true })
            .then(album => {
                console.log('res album:', album);
                res.send(album);
            })
            .catch(next);
    });



module.exports = router;