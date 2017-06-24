const shortid = require('shortid');

const images = [

  {
    title: 'Riot Grrrl 1',
    description: 'Kathleen Hanna',
    url: 'http://www.newyorker.com/wp-content/uploads/2012/11/121126_r22838_g2048-1200.jpg',
    _id: shortid.generate()
  },

  {
    title: 'Riot Grrrl 2',
    description: 'Corrin Tucker',
    url: 'https://s-media-cache-ak0.pinimg.com/originals/a1/1a/d9/a11ad9fb2cf4c687fcb1212db5da342c.jpg',
    _id: shortid.generate()
  },

  {
    title: 'Riot Grrrl 3',
    description: 'Every Grrrl',
    url: 'https://www.speakertv.com/wp-content/uploads/2015/01/every-girl-is-a-riot-girl.jpg',
    _id: shortid.generate()
  }
]


export default {
  get() { return Promise.resolve(images) },

  add(image) {
    const saved = {
      ...image,
      _id: shortid.generate()
    }
    return Promise.resolve(saved);
  },

  delete(id) {
    const index = images.findIndex(image => image._id === id)
    if (index > -1) images.splice(index, 1);
    return Promise.resolve(index !== -1);
  }
}