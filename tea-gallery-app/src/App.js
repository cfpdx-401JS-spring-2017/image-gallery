import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import Albums from './components/Albums';

export default function App(props) {
  
  return (
    <Router>
      <div className="App" >
        <div className="app-header">
          <h2>Welcome to the Cha'llery</h2>
          <h3>A photo gallery of <strong>茶</strong> --> 'Tea'</h3>
        </div>
        <div className="nav">
          <button>
            <Link to="/albums"><h3>Albums</h3></Link>
          </button>
          <button>
            <Link to="/"><h3>Home</h3></Link>
          </button>
        </div>
        <Switch>
          <Route path="/albums" component={Albums} />
          <Route redirect="/" />;
        </Switch>
      </div >
    </Router>
  );
}


