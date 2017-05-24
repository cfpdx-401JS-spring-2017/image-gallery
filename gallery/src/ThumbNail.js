import React, { Component } from 'react';

class ThumbNail extends Component {
  constructor() {
    super();
    this.state ={

    };
  }
  

  render() {
    return (
      <div className="ThumbNail">
        {this.props.images.map((image, i) =>{
            let {title, url} = image;
          return (
            <div key={i} style={{
              border: '5px solid black',
              margin: '2px'
            }}>
              <h4>{title}</h4> 
              <img 
                src={url} 
                alt=""
                style={{
                    height: '25vh', 
                    width: 'auto',
                    margin: '0 5px',
                    padding: 'none'
                }}
              />
            </div>
          );
        })}
      </div>  
    );
  }
}

export default ThumbNail;