const images = [
  {
    title: 'Pouring teapot',
    description: 'what a nice pour',
    url: '/img/pouring-teapot.jpg'
  },
  {
    title: 'tea leaves in teapot',
    description: 'what nice leaves',
    url: '/img/teainpot.jpg'
  },
  {
    title: 'Tetsubin over charcoal',
    description: 'what a nice tetsubin',
    url: '/img/tetsubin-charcoal.jpg'
  },
  {
    title: 'Teapot display',
    description: 'what a nice teapot display',
    url: '/img/teapot-display.jpg'
  },
  {
    title: 'Tealeaf upclose',
    description: '',
    url: '/img/tealeaf-upclose.jpg'
  },
  {
    title: 'Da Hong Pao',
    description: '',
    url: '/img/da-hong-pao.jpg'
  },
  {
    title: 'golden needle',
    description: '',
    url: '/img/golden-needle.jpg'
  },
  {
    title: 'GongFu pour',
    description: '',
    url: '/img/gongfu-pour.jpg'
  },
  {
    title: 'GongFu pour2',
    description: '',
    url: '/img/gongfu-pour2.jpg'
  }
];

export default {
  get() { return Promise.resolve(images); }
};