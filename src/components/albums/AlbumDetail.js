import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Wrapper from '../Wrapper';
import qs from 'qs';

export default class AlbumDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: null
    };
  }

  render() {
    const { album } = this.state;

    if(!album) return <div>Loading...</div>;

    return(
      <div>
        <h3>{album.name}</h3>
        <Wrapper poms={album.images} />
      </div>
    );
  }
}

