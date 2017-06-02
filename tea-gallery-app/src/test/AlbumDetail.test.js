import React from 'react';
import renderer from 'react-test-renderer';
import AlbumDetail from '../components/AlbumDetail';

const images = [
  {
    title: 'tea leaves in teapot',
    description: 'what nice leaves',
    url: '/../public/img/teainpot.jpg'
  },
  {
    title: 'Tetsubin over charcoal',
    description: 'what a nice tetsubin',
    url: '/../public/img/tetsubin-charcoal.jpg'
  },
  {
    title: 'Teapot display',
    description: 'what a nice teapot display',
    url: '/../public/img/teapot-display.jpg'
  }
];

describe.skip('AlbumDetail', () => {
  it('renders the AlbumDetail view', () => {
    const component = renderer.create(<AlbumDetail images={images}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});