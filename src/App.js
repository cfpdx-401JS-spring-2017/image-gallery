import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

import Albums from './components/albums/Albums';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2>CPDB: Cute Pomeranian Database</h2>
          <p>
            Welcome to the <code>Cute Pomeranian Database</code>! Check out our poms by clicking below:
          </p>
          <Switch>
            <Route exact path='/' />
            <Route path='/albums' component={Albums} />
            <Redirect to='/' />
          </Switch>
          <button>
            <Link to="/albums">Go to Albums</Link>
          </button>
        </div>
      </Router>
    );
  }
}

export default App;
