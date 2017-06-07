import React from 'react';
import renderer from 'react-test-renderer';
import AlbumDetail from '../components/AlbumDetail';

const images = [
  {
    title: 'tea leaves in teapot',
    description: 'what nice leaves',
    url: '/../public/img/teainpot.jpg'
  }
];

const match = {
  params: '123'
};

describe.skip('AlbumDetail', () => {
  it('renders the AlbumDetail view', () => {
    const component = renderer.create(<AlbumDetail match={match} images={images}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});