let id = 1;
const nextId = () => (id++).toString();

const albums = [
  {
    _id: '0',
    name: 'Cute Poms',
    images: [
      {
        _id: nextId(),
        name: 'Daisy',
        description: 'A good pom.',
        url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/pomeranian-puppies/pomeranian-puppy-1.jpg'
      },
      {
        _id: nextId(),
        name: 'Ginger',
        description: 'A very good pom.',
        url: 'https://vetstreet.brightspotcdn.com/dims4/default/edb51df/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F19%2F716f20a7f711e0a0d50050568d634f%2Ffile%2FPomeranian-2-645mk062811.jpg'
      },
      {
        _id: nextId(),
        name: 'Sammy',
        description: 'An excellent pom.',
        url: 'https://assets.vetary.com/media/seo_content/dog/pomeranian-med.jpg'
      }]
  },
  {
    _id: '1',
    name: 'Adorable Poms',
    images: [
      {
        _id: nextId(),
        name: 'Jazzy',
        description: 'A happy pom.',
        url: 'http://pommymommy.com/wp-content/uploads/2012/10/Pommy-on-the-Go.jpg'
      },
      {
        _id: nextId(),
        name: 'Python',
        description: 'A brave and bold pom.',
        url: 'https://www.petinsurance.com/en/healthzone/pet-articles/pet-breeds/~/media/805AD347B9BC4890BCE95E3394D6CA2B.ashx?as=1&h=180&w=240'
      },
      {
        _id: nextId(),
        name: 'Tribbles',
        description: 'The best pom.',
        url: 'https://s-media-cache-ak0.pinimg.com/736x/3d/bb/c6/3dbbc606780c996dcd30bd94635c5983.jpg'
      }]
  },
  {
    _id: '2',
    name: 'Silly Poms',
    images: [
      {
        _id: nextId(),
        name: 'Jazzy2',
        description: 'A happy pom.',
        url: 'http://pommymommy.com/wp-content/uploads/2012/10/Pommy-on-the-Go.jpg'
      },
      {
        _id: nextId(),
        name: 'Python2',
        description: 'A brave and bold pom.',
        url: 'https://www.petinsurance.com/en/healthzone/pet-articles/pet-breeds/~/media/805AD347B9BC4890BCE95E3394D6CA2B.ashx?as=1&h=180&w=240'
      },
      {
        _id: nextId(),
        name: 'Tribbles2',
        description: 'The best pom.',
        url: 'https://s-media-cache-ak0.pinimg.com/736x/3d/bb/c6/3dbbc606780c996dcd30bd94635c5983.jpg'
      }]
  }
];

export default {
  get() { return Promise.resolve(albums.slice()); },
  
  getAlbum(id) { return Promise.resolve(albums.find(album => album._id === id)); },

  addPom(pom) {
    const saved = {
      ...pom,
      _id: nextId()
    };
    return Promise.resolve(saved);
  },

  deletePom(id) {
    const index = albums.findIndex(t => t._id === id);
    if (index > -1) albums.splice(index, 1);
    return Promise.resolve(index !== -1);
  }
};