import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../components/ListItem';

const images = [

  {
    title: 'Riot Grrrl 1',
    description: 'Kathleen Hanna',
    url: 'http://www.newyorker.com/wp-content/uploads/2012/11/121126_r22838_g2048-1200.jpg'
  },

  {
    title: 'Riot Grrrl 2',
    description: 'Corrin Tucker',
    url: 'https://s-media-cache-ak0.pinimg.com/originals/a1/1a/d9/a11ad9fb2cf4c687fcb1212db5da342c.jpg'
  },

  {
    title: 'Riot Grrrl 3',
    description: 'Every Grrrl',
    url: 'https://www.speakertv.com/wp-content/uploads/2015/01/every-girl-is-a-riot-girl.jpg'
  }
];


describe('ListItem', () => {
  it('lists images as items', () => {
    const tree = renderer.create(<ListItem images={images} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});