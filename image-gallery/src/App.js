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

  this.handleSubmit = this.handleSubmit.bind(this);

};

handleSubmit(newImage) {
  this.setState({data: [...this.state.data, newImage]})
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
        <Wrapper 
          data={this.state.data} 
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
