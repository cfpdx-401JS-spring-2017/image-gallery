import React, { Component } from 'react';
import './Album.css';
import { Switch, Route, Link } from 'react-router-dom';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    let {albumData} = this.props;
    const { match, location } = this.props;
    console.log(albumData);
    return (
      <div className="Album" >
        <Link className="Link" to={`/albums/${albumData._id}`}><h2>{albumData.title}</h2></Link>
        <div value={albumData._id} onClick={this.props.deleteAlbum}>delete</div>
      </div>  
    );
  }
}

export default Album;