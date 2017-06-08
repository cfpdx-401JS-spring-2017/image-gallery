import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from '../Thumbnail';
import renderer from 'react-test-renderer';
import images from '../../imagesData';



it('renders List view without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Thumbnail  images={images}/>, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<Thumbnail images={images}/>).toJSON();
  expect(tree).toMatchSnapshot();
});