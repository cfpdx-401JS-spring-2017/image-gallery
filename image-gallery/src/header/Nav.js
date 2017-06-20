import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: ['Gallery', 'Thumbnail', 'ListItem'],
      view: 'Thumbnail'
    }
  }

  render() {
    const {view} = this.state;
    return (
      <nav>
        <ul className='Nav'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to={`/Gallery?view=${view}`}>
            Gallery
          </Link>
          </li>
          <li><Link to={`/ListItem?view=${view}`}>
          </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;