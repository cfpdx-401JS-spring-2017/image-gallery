import React from 'react';
import renderer from 'react-test-renderer';
import GalleryItem from '../components/GalleryItem';

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

describe('Gallery Images', () => {
  it('pulls up gallery view', () => {
    const component = renderer.create(<GalleryItem images={images} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});