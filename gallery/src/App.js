import React, { Component } from 'react';
import './App.css';
import AlbumsViewer from './AlbumsViewer';
import Albums from './Albums';

import {
  BrowserRouter as Router,
  Route, Switch, Redirect, Link
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
    }

  }

  render() {
  
    return (
      <div className="App">
        <Router>
            <div>
                <Switch>
                    {/*<Route exact path="/" component={App}/>*/}
                    <Route path="/albums/:id" component={AlbumsViewer}/>
                    <Route path="/albums" component={Albums}/>
                    <Redirect path="/albums" component={Albums}/>
                </Switch>
                <button>
                  <Link to="/albums">Go to Albums</Link>
                </button>
            </div>
        </Router>
      </div>  
    );
  }
}

export default App;
