import React from 'react';
import ReactDOM from 'react-dom';
import List from '../List';
import renderer from 'react-test-renderer';
import images from '../../imagesData';



it('renders List view without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List  images={images}/>, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<List images={images}/>).toJSON();
  expect(tree).toMatchSnapshot();
});