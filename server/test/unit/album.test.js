const assert = require('chai').assert;
const Album = require('../../lib/models/album');

const expectedValidation = () => { throw new Error('expected validation error'); };

describe('album validations', () => {

  it('validates album name', () => {
    const testAlbum = new Album({
      name: 'tea plants',
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
        }]
    });
    return testAlbum.validate();
  });

  describe('validation failures', () => {

    it('requires name', () => {
      const album = new Album();
      album.validate()
        .then(expectedValidation,
        err => {
          const errors = err.errors;
          assert.ok(errors.name && errors.name.kind === 'required');
        });
    });
  });
});