import ImageOne from '../images/imageOne.jpg';
import ImageTwo from '../images/imageTwo.jpg';
import ImageThree from '../images/imageThree.jpg';

let id = 1;
let newId = () => (id++).toString();

const images = [ { 
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
    { 
    title: 'Huge Waterfall',
    description: 'This immaculate waterfall was found deep in the highly dangerous region of Obikenyaoui, a jungle in Brazil',
    url: ImageThree,
    _id: newId()
  }
  
]

export default {
  get() {
    return Promise.resolve(images)
  },

  getImages() {
    return Promise.resolve(images.slice());
  },

  newImageToDb(image) {
    const saved = {
      ...image,
      _id: newId()
    }
    return Promise.resolve(saved);
  },
  removeImage(id) {
    const index = images.findIndex(i => i._id === id);
    if (index > -1) images.splice(index, 1);
    return Promise.resolve(index !== -1);
  }
}


    
