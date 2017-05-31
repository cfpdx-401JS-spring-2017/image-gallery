import React, { Component } from 'react';
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
  images.get()
    .then(images => {
      this.setState({data: images});
    })
}



  render() {
    console.log(this.state.data);
    return (
      <div className="App">
          <ListItem images={this.state.data}/>
      </div>
    );
  }
}

export default App;
