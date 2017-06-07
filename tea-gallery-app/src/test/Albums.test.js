import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Albums from '../components/Albums';

const images = [
  {
    title: 'tea leaves in teapot',
    description: 'what nice leaves',
  },
  {
    title: 'Tetsubin over charcoal',
    description: 'what a nice tetsubin',
  },
  {
    title: 'Teapot display',
    description: 'what a nice teapot display',
  }
];

const match = {
  url: 'google.com'
};


describe.skip('Albums', () => {
  it('renders the Albums view', () => {
    const component = renderer.create(<MemoryRouter initialEntries={[ '/albums', { pathname: '/albums' } ]}
  initialIndex={1}>
    <Albums match={match} images={images}/>
    </MemoryRouter>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});