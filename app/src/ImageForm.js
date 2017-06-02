import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageForm.css';

class ImageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: '',
        desc: '',
        url: '',
    }

    this.titleHandler = this.titleHandler.bind(this);
  }

  titleHandler(e) {
      let {name, value} = e.target;
      this.setState({[name]: value});
  }

  render() {
      let {title, desc, url} = this.state;
    return (
      <div className="ImageForm">
        <form onSubmit={ (e) => {
            e.preventDefault();
            this.props.addImage(this.state);
            }
        }>
            <label>
                Title:
                <input className="InputField" 
                    type="text" 
                    name="title" 
                    value={title}
                    onChange={this.titleHandler}
                />
            </label>
            <label>
                Description:
                <input className="InputField" 
                    type="text" 
                    name="desc" 
                    value={desc}
                    onChange={this.titleHandler}
                />
            </label>
            <label>
                Url:
                <input className="InputField" 
                    type="text" 
                    name="url" 
                    value={url}
                    onChange={this.titleHandler}
                />
            </label>
            <br />  
            <input className="submitButton" 
                type="submit" 
                value="Submit" 
            />
        </form>
      </div>  
    );
  }
}

ImageForm.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string
};

export default ImageForm;