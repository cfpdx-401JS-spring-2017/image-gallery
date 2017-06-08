import React from 'react';
import renderer from 'react-test-renderer';
import Thumbnail from '../components/Thumbnail';

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

describe('Thumbnail', () => {
  it('renders the Thumbnail component', () => {
    const component = renderer.create(<Thumbnail images={images}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});