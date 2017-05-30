import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state ={

    };
  }
  

  render() {
    return (
      <div className="List">
        {this.props.images.map((image, i) =>{
            let {title, description, url, _id} = image;
          return (
            <div key={i} style={{ backgroundColor: '#84A98C', width: '25vw', margin: '5vh 5vh', color:'#354F52'}}>
              <h3>{title}</h3> 
              <p>{description}</p> 
              <p>{url}</p>
              <button value={_id} onClick={(e) => {
                e.preventDefault();
                this.props.deleteImage(e.target.value);
              }}>delete</button>
            </div>
          );
          
        })}
      </div>  
    );
  }
}

export default List;