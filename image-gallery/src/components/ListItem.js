import React, { Component } from 'react';

class ListItem extends Component {
  

  render() {
   let {images}= this.props;
   if (!images.length) return <div> loading... </div>

   return(
     <div className='ListItem'>
       {images.map((image, i) => ( 
       <ul key={i}>
         <li>{image.title}</li>
         <li>{image.description}</li>
         <li>{image.url}</li>
       </ul>
      ))}
     </div>
    );
  }
}

export default ListItem;
