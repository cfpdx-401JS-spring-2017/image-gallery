import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import List from './List';
import Gallery from './Gallery';
import Thumbnail from './Thumbnail';
import Albums from './albums/Album';

const views = [List, Gallery, Thumbnail];

export default class Wrapper extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      View: views[0],
    };
  }

  render() {
    const View = this.state.View;
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path='/' component={List} />
          <Route path='/albums' component={Albums} />
          <Redirect to='/' />
        </Switch>
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