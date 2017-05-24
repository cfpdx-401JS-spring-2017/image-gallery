import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state ={

    };
  }
  

  render() {
    return (
      <div className="List">
        {this.props.images.map((image, i) =>{
            let {title, description, url} = image;
          return (
            <div key={i} style={{ width: '30vw', margin: '5px 5px'}}>
              <h3>{title}</h3> 
              <p>{description}</p> 
              <p>{url}</p>
            </div>
          );
          
        })}
      </div>  
    );
  }
}

export default List;