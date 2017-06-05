import React, { Component } from 'react';

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

  resetForm() {
    this.setState({
      title: '',
      description: '',
      url: ''
    })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  render() {
    return(
      <form onSubmit={(event) => {
          event.preventDefault();
          this.props.handleSubmit(this.state);
          this.resetForm();
        }}>
        <label>
          Image Title:
          <input name='title' type="text" value={this.state.title} onChange={this.handleChange}/>
          Image Description:
          <input name='description' type="text" value={this.state.description} onChange={this.handleChange}/>
          Image URL:
          <input name='url' type="text" value={this.state.url} onChange={this.handleChange}/>
        </label>
          <input type="submit" value="Submit"/>
        </form>
    );
  }
}

export default AddImage;