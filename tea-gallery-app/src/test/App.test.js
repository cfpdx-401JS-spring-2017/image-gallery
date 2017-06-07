import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('renders the app', () => {
    const component = renderer.create(<App/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});