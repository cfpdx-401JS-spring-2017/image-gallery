import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Gallery from './Gallery';
import ThumbNail from './ThumbNail';
import List from './List';
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
  const bobo = renderer.create(<Gallery />).toJSON();
  expect(bobo).toMatchSnapshot();
});


