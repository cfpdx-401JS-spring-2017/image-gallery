// import lordsOfDogtown from './photos/lordsOfDogtown.jpg';
// import jayAdams from './photos/jayAdams.png';
// import peggyOki from './photos/peggyOki.jpg';
// import mikeKolar from './photos/mikeKolar.jpg';
// import peggyTurner from './photos/peggyTurner.jpg';
// import lauraThornhill from './photos/lauraThornhill2.jpg';
// import rampage from './photos/rampage.jpg';
// import tonyAlva from './photos/tonyAlva.jpg';
// import shortId from 'shortid';


// const images = [
//     {
//         title: 'Z Boys',
//         description: 'Zephyr skate team 1970\'s',
//         url: lordsOfDogtown,
//         wiki: 'https://en.wikipedia.org/wiki/Z-Boys',
//         _id: shortId.generate()
//     },

//     {
//         title: 'Turn Only',
//         description: 'Jay Adams gets low',
//         url: jayAdams,
//         wiki: 'http://www.skateboardinghalloffame.org/projects/2012-jay-adams-2/',
//         _id: shortId.generate()
//     },

//     {
//         title: 'Peggy Does Venice',
//         description: 'Peggy Oki repping Zephr',
//         url: peggyOki,
//         wiki: 'http://www.skateboardinghalloffame.org/projects/2012-peggy-oki-2/',
//         _id: shortId.generate()
//     },

//     {
//         title: 'Jumping Homies',
//         description: 'Mike Kolar 1970\'s',
//         url: mikeKolar,
//         wiki: 'https://www.washingtonpost.com/news/in-sight/wp/2015/08/20/locals-only-sun-drenched-vintage-photos-show-the-dawn-of-californias-skateboarding-culture-in-the-1970s/?utm_term=.33b15ce4e7ce',
//         _id: shortId.generate()
//     },

//     {
//         title: "Tippin' Toes",
//         description: 'Laura Thornhill in skate competition 1970\'s',
//         url: lauraThornhill,
//         wiki: 'http://www.skateboardinghalloffame.org/projects/2013-laura-thornhill-caswell/',
//         _id: shortId.generate()
//     },

//     {
//         title: "Van Fans",
//         description: 'Peggy Turner repping Vans in skate competition',
//         url: peggyTurner,
//         wiki: '',
//         _id: shortId.generate()
//     },

//     {
//         title: "Jumping Homies 2.0",
//         description: 'Rampage Expo 1970\'s',
//         url: rampage,
//         _id: shortId.generate()
//     },
//     {
//         title: 'Custom Trucks',
//         description: 'Tony Alva with custom gear',
//         url: tonyAlva,
//         wiki: 'http://www.skateboardinghalloffame.org/projects/tony-alva/',
//         _id: shortId.generate()

//     }

// ];

// export default {
//     //get all images and make copy of array of objects
//     getImages() {
//         return Promise.resolve(images.slice());
//     },

//     addImage(image) {
//         const saved = {
//             ...image,
//             _id: shortId.generate()
//         }
//         return Promise.resolve(saved);

//     },
// deleteImage(id) {
//     const index = images.findIndex(image => image._id === id);
//     //splice out the index with a matching id to the desired deleted image
//     if (index > -1) images.splice(index, 1);
//     //Q: not sure about the logic here
//     return Promise.resolve(index !== -1);
// }
// }