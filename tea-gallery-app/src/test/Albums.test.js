import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Albums from '../components/Albums';

const albums = [
  {
    name: 'album',
    images: [
      {
        title: 'tea leaves in teapot',
        description: 'what nice leaves'
      }
    ]
  }
];

describe('Albums', () => {
  it('renders the Albums view', () => {
    const component = renderer.create(<MemoryRouter initialEntries={['/albums', { pathname: '/albums' }]}
      initialIndex={1}>
      <Albums albums={albums} />
    </MemoryRouter>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});