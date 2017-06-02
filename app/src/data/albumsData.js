import ImageOne from '../images/imageOne.jpg';
import ImageTwo from '../images/imageTwo.jpg';

let id = 1;
let newId = () => (id++).toString();

const albums = [
    { 
        title: 'Album One',
        pictures: [
            { 
            title: 'Cool Waterfall',
            description: 'This waterfall is located in heart of Africa near the mysterious Triad Canyon',
            url: ImageOne,
            _id: newId()
            },
            { 
            title: 'Swaggy Creek',
            description: 'This lonely creek was from my recent adventure to the remote island of Ajobiwana, off the coast of Thailand',
            url: ImageTwo,
            _id: newId()
            },
        ],
        _id: 400
    },
    {title: 'Album Two',
        pictures: [
            { 
            title: 'Badd Ass Waterfall',
            description: 'This waterfall is located in heart of Africa near the mysterious Triad Canyon',
            url: ImageOne,
            _id: newId()
            },
            { 
            title: 'Turned Up Creek',
            description: 'This lonely creek was from my recent adventure to the remote island of Ajobiwana, off the coast of Thailand',
            url: ImageTwo,
            _id: newId()
            },
        ],
        _id: 500
    },
    {title: 'Album Three',
        pictures: [
            { 
            title: 'Real Mofo Waterfall',
            description: 'This waterfall is located in heart of Africa near the mysterious Triad Canyon',
            url: ImageOne,
            _id: newId()
            },
            { 
            title: 'Blacking Out Creek',
            description: 'This lonely creek was from my recent adventure to the remote island of Ajobiwana, off the coast of Thailand',
            url: ImageTwo,
            _id: newId()
            },
        ],
        _id: 600
    }
  
]

export default {
  get() {
    return Promise.resolve(albums)
  },

  getAlbums() {
    return Promise.resolve(albums.slice());
  },

  getAlbumById(id) {
    return Promise.resolve(albums.find(album => {
        return album._id.toString() === id;
    }));
  },

  newAlbumToDb(album) {
    const saved = {
      ...album,
      _id: newId()
    }
    return Promise.resolve(saved);
  },
  removeAlbums(id) {
    const index = albums.findIndex(i => i._id === id);
    if (index > -1) albums.splice(index, 1);
    return Promise.resolve(index !== -1);
  },

  addPictureToAlbum(image) {
    const saved = {
        ...image,
        _id: newId()
    }
    return Promise.resolve(image);
  },

  removePicFromAlbum(image) {
    const saved = {
        ...image,
        _id: newId()
    }
    return Promise.resolve(image);
  }
}