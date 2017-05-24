import ImageOne from '../images/imageOne.jpg';
import ImageTwo from '../images/imageTwo.jpg';
import ImageThree from '../images/imageThree.jpg';

const images = [ { 
    title: 'Cool Waterfall',
    description: 'This waterfall is located in heart of Africa near the mysterious Triad Canyon',
    url: ImageOne
    },
    { 
    title: 'Swaggy Creek',
    description: 'This lonely creek was from my recent adventure to the remote island of Ajobiwana, off the coast of Thailand',
    url: ImageTwo
    }, 
    { 
    title: 'Huge Waterfall',
    description: 'This immaculate waterfall was found deep in the highly dangerous region of Obikenyaoui, a jungle in Brazil',
    url: ImageThree
    }
]

export default {
  get() { return Promise.resolve(images) }
}