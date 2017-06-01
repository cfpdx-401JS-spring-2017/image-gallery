import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import List from './views/List';
import Gallery from './views/Gallery';
import Thumbnail from './views/Thumbnail';

const views = [List, Gallery, Thumbnail];

export default class Wrapper extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      View: views[2],
    };
  }

  render() {
    const View = this.state.View;
    return (
      <Router>
      <div>
        {views.map(View => (
          <button key={View.name}
            onClick={() => this.setState({ View })}>
            {View.name}
          </button>
        ))}
        <View
          poms={this.props.poms}
          handleDelete={this.props.handleDelete}
        />
      </div>
      </Router>
    );
  }
}