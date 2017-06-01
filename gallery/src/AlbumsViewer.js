import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import albumsData from './data/albumsData.js';

class AlbumsViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }
  
  componentDidMount() {
      console.log(this.props.match.params.id);
    //   albumsData.

  }
  render() {
    
    return (
      <div className="AlbumsViewer" >
        <h1>YOOOOOO</h1>
      </div>  
    );
  }
}

export default AlbumsViewer;