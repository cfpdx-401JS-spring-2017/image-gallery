import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import ReactDOM from 'react-dom';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders the app', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot(); //passsssss
  });

});