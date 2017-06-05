import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Gallery from './Gallery';
import ThumbNail from './ThumbNail';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot of main App component', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a snapshot of Gallery component', () => {
  const component = renderer.create(<Gallery />);
  const bobo = component.toJSON();
  expect(bobo).toMatchSnapshot();
});


