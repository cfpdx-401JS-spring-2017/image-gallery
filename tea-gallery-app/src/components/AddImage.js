import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      url: ''
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
        this.props.onAddImage(this.state);
      }}>
        <label>Image name<input name='title' onChange={this.handleChange}></input></label><br/>
        <label>Description<input name='description' onChange={this.handleChange}></input></label><br/>
        <label>URL<input name='url' onChange={this.handleChange}></input></label><br/>
        <button type="submit">Add</button>
      </form>
    );
  }
}

AddImage.propTypes = {
  onAddImage: PropTypes.func,
};

export default AddImage;