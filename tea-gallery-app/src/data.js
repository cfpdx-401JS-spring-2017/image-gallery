import shortId from 'shortid';

const albums = [
  {
    _id: '123',
    name: 'Teaware',
    images: [
      {
        title: 'tea leaves in teapot',
        description: 'what nice leaves',
        url: '/img/teainpot.jpg',
        _id: shortId.generate()
      },
      {
        title: 'Tetsubin over charcoal',
        description: 'what a nice tetsubin',
        url: '/img/tetsubin-charcoal.jpg',
        _id: shortId.generate()
      },
      {
        title: 'Teapot display',
        description: 'what a nice teapot display',
        url: '/img/teapot-display.jpg',
        _id: shortId.generate()
      }
    ]
  },
  {
    _id: '456',
    name: 'Tea Plants',
    images: [
      {
        title: 'Tealeaf upclose',
        description: '',
        url: '/img/tealeaf-upclose.jpg',
        _id: shortId.generate()
      },
      {
        title: 'Da Hong Pao',
        description: '',
        url: '/img/da-hong-pao.jpg',
        _id: shortId.generate()
      },
      {
        title: 'golden needle',
        description: '',
        url: '/img/golden-needle.jpg',
        _id: shortId.generate()
      }
    ]
  },
  {
    _id: '789',
    name: 'Tea Spaces',
    images: [
      {
        title: 'GongFu pour',
        description: '',
        url: '/img/gongfu-pour.jpg',
        _id: shortId.generate()
      },
      {
        title: 'GongFu pour2',
        description: '',
        url: '/img/gongfu-pour2.jpg',
        _id: shortId.generate()
      }
    ]
  }
];

export default {
  get() { return Promise.resolve(albums.slice()); },
  getAlbum(id) { 
    return Promise.resolve(albums.find(album => album._id === id));
  },
  AddImage(image) {
    const savedImg = {
      ...image,
      _id: shortId.generate()
    };
    return Promise.resolve(savedImg);
  },
  deleteImage(id) {
    const index = albums.findIndex(img => img._id === id);
    if (index > -1) albums.splice(index, 1);
    return Promise.resolve(index !== -1);
  }
};