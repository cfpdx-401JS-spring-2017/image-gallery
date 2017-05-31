import React, { Component } from 'react';

class ListItem extends Component {
  

  render() {
   let {images}= this.props;
   if (!images.length) return <div> loading... </div>

   return(
     <div className='ListItem'>
      <h2>{images.title}</h2>
     </div>
    );
  }
}

export default ListItem;
