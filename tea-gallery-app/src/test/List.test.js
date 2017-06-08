import React from 'react';
import renderer from 'react-test-renderer';
import List from '../components/List';

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

describe('List', () => {
  it('renders the List component', () => {
    const component = renderer.create(<List images={images}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});