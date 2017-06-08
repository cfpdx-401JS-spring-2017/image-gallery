import images from './imagesData';

export default {
    get() { return Promise.resolve(images) }
}