import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from '../components/Gallery';

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

describe('Gallery', () => {
  it('renders the Gallery view', () => {
    const component = renderer.create(<Gallery images={images}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});