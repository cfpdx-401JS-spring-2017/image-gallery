import React from 'react';
import renderer from 'react-test-renderer';
import { DeleteAlbumButton, DeleteImageButton } from '../components/DeleteButtons';

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

describe('DeleteButtons', () => {
  it('renders the DeleteAlbumButton component', () => {
    const component = renderer.create(<DeleteAlbumButton images={images}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders the DeleteImageButton component', () => {
    const component = renderer.create(<DeleteImageButton images={images}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});