import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

// const images = [
//   {
//     title: 'tea leaves in teapot',
//     description: 'what nice leaves',
//     url: '/../public/img/teainpot.jpg'
//   },
//   {
//     title: 'Tetsubin over charcoal',
//     description: 'what a nice tetsubin',
//     url: '/../public/img/tetsubin-charcoal.jpg'
//   },
//   {
//     title: 'Teapot display',
//     description: 'what a nice teapot display',
//     url: '/../public/img/teapot-display.jpg'
//   }
// ];

describe('App', () => {
  it('renders the app', () => {
    const component = renderer.create(<App/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});