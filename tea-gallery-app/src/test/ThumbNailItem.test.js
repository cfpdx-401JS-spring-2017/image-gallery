import React from 'react';
import renderer from 'react-test-renderer';
import ThumbnailItem from '../components/ThumbnailItem';

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

describe('ThumbnailItem', () => {
  it('renders the ThumbnailItem component', () => {
    const component = renderer.create(<ThumbnailItem images={images}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});