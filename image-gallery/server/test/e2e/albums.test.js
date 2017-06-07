const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;
const Album = require('../../lib/models/album');

describe('albums api', () => {

    before(db.drop);

    it('GETS all albums', () => {
        return request
            .get('/api/albums')
            .then(res => {
                const albums = res.body;
                assert.deepEqual(albums, [])
            })
    })
    let fakeAlbum1 = {
        name: 'fake album',
        images: [
            {
                title: 'Cute Bunny',
                description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
                url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
            },
            {
                title: 'Cuter Bunny',
                description: 'Butterscotty and sweet!!!',
                url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
            },
        ]
    };

    let fakeAlbum2 = {
        name: 'faker album2',
        images: [
            {
                title: 'Cute Bunny',
                description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
                url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
            },

            {
                title: 'Cuter Bunny',
                description: 'Butterscotty and sweet!!!',
                url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
            },

            {
                title: 'Cutest Bunny',
                description: 'snow bunny stare!',
                url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
            }
        ]

    };

    let fakeAlbum3 = {
        name: 'fake album3',
        images: [
            {
                title: 'Cuter Bunny',
                description: 'Butterscotty and sweet!!!',
                url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
            },

            {
                title: 'Cutest Bunny',
                description: 'snow bunny stare!',
                url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
            }
        ]

    };

    function saveAlbum(album) {
        return request
            .post('/api/albums')
            .send(album)
            .then(res => res.body);

    }

    it.only('rountrips a new Album', () => {
        return saveAlbum(fakeAlbum1)
            .then(savedAlbum => {
                assert.ok(savedAlbum._id, 'saved has id');
                fakeAlbum1 = savedAlbum;
            })
            .then(() => {
                return request.get(`/api/albums/${fakeAlbum1._id}`);

            })
            .then(res => res.body)
            .then(gotAlbum => {
                
                assert.deepEqual(gotAlbum, Object.assign({}, fakeAlbum1, { images: [] }));
            });
    });

    it('GET returns 404 for non-existent id', () => {
        const fakeId = '5201103b8896909da4402997';
        return request.get(`/api/albums/${fakeId}`)
            .then(
            () => { throw new Error('expected 404'); },
            res => {
                assert.equal(res.status, 404);
            }
            );
    });

    it('returns list of all albums', () => {

        return Promise.all([
            saveAlbum(fakeAlbum2),
            saveAlbum(fakeAlbum3)
        ])
            .then(savedAlbum => {
                fakeAlbum2 = savedAlbum[0];
                fakeAlbum3 = savedAlbum[1];
            })
            .then(() => request.get('/api/albums'))
            .then(res => res.body)
            .then(albums => {
                assert.equal(albums.length, 3);
                function test(fakeAlbum) {
                    assert.include(albums, { name: fakeAlbum.name, _id: fakeAlbum._id });
                }

                test(fakeAlbum1);
                test(fakeAlbum2);
                test(fakeAlbum3);
            });
    });


    describe('GET /albums/:id', () => {
        let testImage = null;
        before(() => {

            testImage = {
                title: 'Bugs Bunny',
                description: 'what up doc?',
                url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/640px-Bugs_Bunny.svg.png'
            };
            return new Image(testImage).save()
                .then(savedImage => {
                    testImage = savedImage;
                });

        });

        it('returns list of the images titles associated with an album id', () => {
            return request
                .get(`/api/albums/${fakeAlbum2._id}`)
                .then(res => {
                    const album = res.body;
                    assert.deepEqual(album, Object.assign(fakeAlbum2, { images: [{ _id: testImage._id.toString(), title: testImage.title }] }));

                });
        });

    });


    it('updates albums', () => {
        fakeAlbum.name = 'Ivy Album';
        return request.put(`/api/albums/${fakeAlbum3._id}`)
            .send(fakeAlbum3)
            .then(res => res.body)
            .then(updated => {
                assert.equal(updated.name, 'Ivy Album');
            });
    });

    it('deletes an album', () => {
        return request.delete(`/api/albums/${fakeAlbum3._id}`)
            .then(res => res.body)
            .then(result => {
                assert.isTrue(result.removed);
            })
            .then(() => request.get('/api/albums'))
            .then(res => res.body)
            .then(albums => {
                assert.equal(albums.length, 2);
            });
    });


    it('errors on validation falure', () => {
        return saveAlbum({})
            .then(
            () => { throw new Error('expected failure'); },
            () => { }
            );
    });


});
