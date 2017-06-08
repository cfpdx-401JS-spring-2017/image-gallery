import React from 'react';
import ReactDOM from 'react-dom';
import View from '../View';
import renderer from 'react-test-renderer';
import images from '../imagesData';



it('renders View view without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<View  images={images}/>, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<View images={images}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

