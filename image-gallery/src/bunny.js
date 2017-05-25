const images = [
  
{ 
  title: 'bunny 1',
  description: 'Cute bunny',
  url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
}

{ 
  title: 'bunny 2',
  description: 'Cute bunny 2',
  url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
}

{ 
  title: 'bunny 3',
  description: 'Cute bunny 3',
  url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
}
]


export default {
  get() { return Promise.resolve(images) }
}