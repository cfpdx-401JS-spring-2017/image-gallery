import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/IntroView';
import Albums from './components/Albums'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';



export default function App() {   
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path='/' component={Intro} />
            <Route path='/albums' component={Albums} />
            <Redirect to='/'/>
            
          </Switch>
        </div>
      </Router>

    );
  }


