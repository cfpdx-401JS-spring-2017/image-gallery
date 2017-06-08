import images from './imagesData';
import shortId from 'shortid'

export default {
    //get all images and make copy of array of objects
    getImages() {
        return Promise.resolve(images.slice());
    },

    addImage(image) {
        const saved = {
            ...image,
            _id: shortId.generate()
        }
        return Promise.resolve(saved);

    },
deleteImage(id) {
    const index = images.findIndex(image => image._id === id);
    //splice out the index with a matching id to the desired deleted image
    if (index > -1) images.splice(index, 1);
    //Q: not sure about the logic here
    return Promise.resolve(index !== -1);
}
}