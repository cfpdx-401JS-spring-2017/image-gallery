const assert = require('chai').assert;
const db = require('./db');
const request = require('./request');

describe('/albums API', () => {

  before(db.drop);

  let testAlbum =
    {
      name: 'Teaware',
      images: [
        {
          title: 'tea leaves in teapot',
          description: 'what nice leaves',
          url: '/img/teainpot.jpg',
        },
        {
          title: 'Tetsubin over charcoal',
          description: 'what a nice tetsubin',
          url: '/img/tetsubin-charcoal.jpg',
        },
        {
          title: 'Teapot display',
          description: 'what a nice teapot display',
          url: '/img/teapot-display.jpg',
        }
      ]
    };

  // before(() => {
  //   return request.post('/ingredients')
  //     .send(testIngredients)
  //     .then(res => res.body)
  //     .then(saved => testIngredients = saved);
  // });

  it('initial GET returns empty array', () => {
    return request.get('/albums')
      .then(res => assert.deepEqual(res.body, []));
  });

  it('saves albums', () => {
    return request.post('/albums')
      .send(testAlbum)
      .then(res => res.body)
      .then(saved => {
        assert.ok(saved._id);
        testAlbum = saved;
      });
  });

  it('deletes an album', () => {
    return request.delete('/albums')
      .send({
        id: testAlbum._id
      })
      .then(res => res.body)
      .then(deleted => assert.isTrue(deleted.removed));
  });
});