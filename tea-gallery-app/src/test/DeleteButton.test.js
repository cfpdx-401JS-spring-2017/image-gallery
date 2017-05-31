import React from 'react';
import renderer from 'react-test-renderer';
import DeleteButton from '../components/DeleteButton';

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

describe('DeleteButton', () => {
  it('renders the DeleteButton component', () => {
    const component = renderer.create(<DeleteButton images={images}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});