import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
  constructor() {
    super();
    this.state ={
        galleryView: false,
        index: 0
    };
    this.showGallery = this.showGallery.bind(this);
    this.scrollNext = this.scrollNext.bind(this);
    this.scrollLast = this.scrollLast.bind(this);
  }
  
  showGallery() {
      let { galleryView } = this.state;
      galleryView = galleryView ? false : true;
      this.setState({ galleryView: galleryView })
  }

  scrollNext(){
      let { index } = this.state;
      if (index === 2) {
          this.setState({ index: 0 });
      } else {
          index += 1;
          this.setState({ index });
      }
  }

  scrollLast(){
      let { index } = this.state;
      if (index === 0) {
          this.setState({ index: 2 });
      } else {
          index -= 1;
          this.setState({ index: index});
      }
  }

  render() {
      let { galleryView, index } = this.state;
      let {images} = this.props;
      let divvy = null;

      if (galleryView) {
         divvy = <div className="YoungDivvy" >
            <p className="exitButton" onClick={this.showGallery}>exit</p>
            <p className="arrows" onClick={this.scrollLast}> {"<"} </p>
                <div className="WhoDaNeighbors">
                    <h3 className="ImageTitle">{images[index].title}</h3>
                    <img src={images[index].url} alt=""/>
                    <h5>{images[index].description}</h5>
                </div>
            <p className="arrows" onClick={this.scrollNext}> {">"} </p>
         </div>;
      } else {
          divvy = null;
      }
    return (
      <div className="Gallery">
       <button style={{
           textDecoration: 'none',
           backgroundColor: 'white',
           color: 'black',
           border: 'solid black 5px',
           margin: '2vh',
           width: '35vw',
           height: '8vh',
           fontSize: '3em'
       }}   onClick={this.showGallery}>Go To Gallery</button>
       {divvy}
      </div>  
    );
  }
}

export default Gallery;