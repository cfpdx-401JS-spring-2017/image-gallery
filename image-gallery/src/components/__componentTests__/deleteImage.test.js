import React from 'react';
import renderer from 'react-test-renderer';
import DeleteImage from '../../components/DeleteImage';

function handleDelete() {}

describe('DeleteImage', () => {
  it('deletes an images', () => {
    const tree = renderer.create(<DeleteImage onDelete={handleDelete} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});