import React, { PureComponent } from 'react';
import List from './List';
import Gallery from './Gallery';
import Thumbnail from './Thumbnail';

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
      <div>
        {views.map(View => (
          <button key={View.name}
            onClick={() => this.setState({ View })}>
            {View.name}
          </button>
        ))}
        <View poms={this.props.poms} />
      </div>
    );
  }
}