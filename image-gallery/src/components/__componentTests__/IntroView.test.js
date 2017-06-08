import React from 'react';
import ReactDOM from 'react-dom';
import Intro from '../IntroView';
import renderer from 'react-test-renderer';




it('renders List view without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Intro/>, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<Intro/>).toJSON();
  expect(tree).toMatchSnapshot();
});