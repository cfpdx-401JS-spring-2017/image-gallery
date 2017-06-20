import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Nav from './header/Nav';
import images from './data';
import Wrapper from './components/Wrapper'

import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  };

  handleSubmit(newImage) {
    this.setState({ data: [...this.state.data, newImage] })
  }

  handleDelete(id) {
   images.delete(id)
    .then(() => this.forceUpdate())
}

  componentDidMount() {
    images.get()
      .then(images => {
        this.setState({ data: images });
      })
  }

  render() {

    return (
      <div className="App">
        <route component={Nav}/>
        <Wrapper
          data={this.state.data}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />
        <Switch>
          <Route exact path='/' component={Thumbnail}/>
          <Route path='/Gallery' component={Gallery}/>
          <Route path='/ListItem' component={ListItem}/>
        </Switch>
      </div>
    );
  }
}

export default App;
