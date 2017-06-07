import React, { Component } from 'react';

class ThumbNail extends Component {
  constructor(props) {
    super(props);
    this.state ={

    };
  }
  

  render() {
    return (
      <div className="ThumbNail">
        {this.props.images.map((image, i) =>{
            let {title, url, _id} = image;
          return (
            <div key={i} style={{
              border: '5px solid #2F3E46',
              borderRadius: '10px',
              margin: '2px',
              height: '32vh',
              backgroundColor: '#84A98C'
            }}>
              <h4 style={{color:'#CAD2C5'}}>{title}</h4> 
              <img 
                src={url} 
                alt=""
                style={{

                  border: '5px solid #2F3E46',
                    height: '20vh', 
                    width: 'auto',
                    margin: '0 5px',
                    padding: 'none'
                }}
              />
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

export default ThumbNail;