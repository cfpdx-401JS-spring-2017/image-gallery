import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AlbumsViewer from './AlbumsViewer';
import Albums from './Albums';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/albums" component={Albums}/>
                <Route path="/albums/:id" component={AlbumsViewer}/>
                <Redirect path="/albums" component={Albums}/>
            </Switch>
        </div>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
