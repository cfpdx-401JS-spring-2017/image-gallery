import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="add-item" onSubmit={e => {
        e.preventDefault();
        this.props.onAddAlbum(this.state);
      }}>
        <label>Add an album<input placeholder='album name' name='name' onChange={this.handleChange}></input></label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

AddAlbum.PropTypes = {
  onAddAlbum: PropTypes.func.isRequired
};

export default AddAlbum;