import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import AddFile from './components/AddFile';
import pomsAPI from './data';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      poms: null
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    pomsAPI.get()
      .then(poms => this.setState({ poms }));
  }

  handleAdd(newPom) {
    pomsAPI.addPom(newPom)
      .then(pom => {
        this.setState({
          poms: [...this.state.poms, pom]
        });
      });
  }

  handleDelete(id, index) {
    pomsAPI.deletePom(id)
      .then(() => {
        const poms = this.state.poms.slice();
        poms.splice(index, 1);
        this.setState({ poms });
      });
  }

  render() {
    return (
      <div className="App">
        <h2>CPDB: Cute Pomeranian Database</h2>
        <p>
          Welcome to the <code>Cute Pomeranian Database</code>! Check out our poms by clicking below:
        </p>
        {this.state.poms && <Wrapper poms={this.state.poms} />}
        <AddFile poms={this.state.poms} onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
