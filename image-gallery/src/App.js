import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import ListItem from './components/ListItem';
import images from './data';


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  };

componentDidMount() {
  images.get(images => {
    console.log('images', images);
    return images;
  })
    .then(images => {
      this.setState({data: images});
    })
}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <ListItem images={this.state.data[0]}/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
