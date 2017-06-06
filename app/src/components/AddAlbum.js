import React, { Component } from 'react';

export default class AddAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  reset() {
    this.setState({
      name: ''
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h4>Like Poms? Add Your Own Album!</h4>
        <form onSubmit={e => {
          e.preventDefault();
          this.props.handleAdd(this.state);
          this.reset();
        }}>
          <label>
            name: <input name="name"
              required
              value={name}
              onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}