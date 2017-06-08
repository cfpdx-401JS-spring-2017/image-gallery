import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: ['gallery', 'thumbnail', 'list'],
      view: 'thumbnail'
    }
  }

  render() {
    return (
      const {view} = this.state;

    <nav>
      <ul className='nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to={`/gallery?view=${view}`}>
          Gallery
          </Link>
        </li>
        <li><Link to={`/list?view=${view}`}>
        </Link>
        </li>
      </ul>
    </nav>
    );
  }
}