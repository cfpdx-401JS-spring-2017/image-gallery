import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import List from './List';

import renderer from 'react-test-renderer';

const images = [ { 
    title: 'Cool Waterfall',
    description: 'This waterfall is located in heart of Africa near the mysterious Triad Canyon',
    url: 'ImageOne',
    _id: 1
    }
]
it('renders without crashing', () => {
    
  const div = document.createElement('div');
  ReactDOM.render(<List images={images}/>, div);
});

it('renders a snapshot of main List component', () => {
  const component = renderer.create(<List images={images} />);
  const bobo = component.toJSON();
  expect(bobo).toMatchSnapshot();
});