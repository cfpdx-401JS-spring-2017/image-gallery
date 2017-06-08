import React from 'react';
import ReactDOM from 'react-dom';
import Single from '../Single';
import renderer from 'react-test-renderer';
import images from '../../imagesData';



it('renders List view without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Single  images={images}/>, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<Single images={images}/>).toJSON();
  expect(tree).toMatchSnapshot();
});