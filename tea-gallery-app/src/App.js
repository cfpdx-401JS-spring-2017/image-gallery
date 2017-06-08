import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link, 
  Redirect
} from 'react-router-dom';
import './App.css';
import AlbumsContainer from './components/AlbumsContainer';

export default function App(props) {

  return (
    <Router>
      <div className="App" >
        <div className="app-header">
          <h2>Welcome to the Cha'llery</h2>
          <h3>A photo gallery of <strong>茶</strong> --> 'Tea'</h3>
        </div>
        <div className="nav">
          <Link to="/albums">
            <button>
              <h3>Albums</h3>
            </button>
          </Link>
          <Link to="/">
            <button>
              <h3>Home</h3>
            </button>
          </Link>
        </div>
        <Switch>
          <Route path="/albums" component={AlbumsContainer} />
          <Redirect to="/"/>;
        </Switch>
      </div >
    </Router>
  );
}


