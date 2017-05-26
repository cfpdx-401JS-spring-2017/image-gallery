import React, { Component } from 'react';

export default class AddFile extends Component {
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
    const { name, description, url, value } = event.target;
    this.setState({
      [name]: value,
      [description]: value,
      [url]: value
    });
  }

  render() {
    const { name, description, url } = this.state;

    return (
      <div>
        <h2>Like Poms? Add Your Own!</h2>
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