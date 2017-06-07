import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ImageForm from './ImageForm';

import renderer from 'react-test-renderer';
it('renders without crashing', () => {
    
  const div = document.createElement('div');
  ReactDOM.render(<ImageForm />, div);
});

it('renders a snapshot of main ImageForm component', () => {
  const component = renderer.create(<ImageForm  />);
  const bobo = component.toJSON();
  expect(bobo).toMatchSnapshot();
});