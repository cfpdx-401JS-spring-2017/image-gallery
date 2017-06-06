const Router = require('express').Router;
const router = Router();
const Picture = require('../models/picture');
const Album = require('../models/album');

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

    .post('/:id', (req, res, next) => {
        let finalPic;
        new Picture(req.body)
            .save() 
            .then(picture => {
                finalPic = picture;
                Album.findByIdAndUpdate(req.params.id, 
                { $push: { pictures: picture} },
                {new: true}                    
                )
                .then(() => {
                    res.send(finalPic);
                })
            })
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