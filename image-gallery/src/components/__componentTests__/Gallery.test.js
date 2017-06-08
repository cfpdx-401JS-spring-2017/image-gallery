
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from '../Gallery';
import renderer from 'react-test-renderer';
import images from '../../imagesData';



it('renders List view without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gallery  images={images}/>, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<Gallery images={images}/>).toJSON();
  expect(tree).toMatchSnapshot();
});