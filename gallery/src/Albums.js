import React, { Component } from 'react';
import './Albums.css';
import Album from './Album';
import albumsData from './data/albumsData.js';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    }
  }

  componentDidMount() {
    albumsData.get()
    .then(albums => {
      this.setState({albums: albums});  
    });
  }

  render() {
    let {albums} = this.state;
    return (
      <div className="Albums">
        {albums.map((album,i) => {
            return <Album key={i} albumData={album} />
        })}
      </div>  
    );
  }
}

export default Albums;