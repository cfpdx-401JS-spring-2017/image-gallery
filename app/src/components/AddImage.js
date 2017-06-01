import React, { Component } from 'react';

export default class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      url: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  reset() {
    this.setState({
      name: '',
      description: '',
      url: ''
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, description, url } = this.state;

    return (
      <div>
        <h4>Add Your Own Poms!</h4>
        <form onSubmit={e => {
          e.preventDefault();
          this.props.onAdd(this.state);
          this.reset();
        }}>
          <label>
            name: <input name="name"
              required
              value={name}
              onChange={this.handleChange} />
          </label>
          <label>
            url: <input name="url"
              required
              value={url}
              onChange={this.handleChange} />
          </label>
          <label>
            description: <input name="description"
              required
              value={description}
              onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}