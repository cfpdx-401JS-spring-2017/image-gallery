const assert = require('chai').assert;
const Image = require('../../lib/models/image');

const expectedValidation = () => { throw new Error('expected validation error'); };

describe('image validations', () => {

  it('validates image name', () => {
    const testImage = new Image({
      title: 'tea leaves in teapot',
      description: 'what nice leaves',
      url: '/img/teainpot.jpg',
    });
    return testImage.validate();
  });

  describe('validation failures', () => {

    it('requires url', () => {
      const image = new Image();
      image.validate()
        .then(expectedValidation,
        err => {
          const errors = err.errors;
          assert.ok(errors.url && errors.url.kind === 'required');
        });
    });
  });
});