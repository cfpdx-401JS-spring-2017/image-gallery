import React, { Component } from 'react';
import './styles/App.css';
import images from './data';
import Wrapper from './components/Wrapper'


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  };

  componentDidMount() {
    images.get()
      .then(images => {
        this.setState({ data: images });
      })
  }

  render() {

    return (
      <div className="App">
        <Wrapper data={this.state.data}/>
      </div>
    );
  }
}

export default App;
