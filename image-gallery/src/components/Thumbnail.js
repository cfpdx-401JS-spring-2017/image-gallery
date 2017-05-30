import React from 'react';
import PropTypes from 'prop-types';

export default function Thumbnail(props) {


        return (
            <div>
                {props.images.map((image, index) => (
                    <figure key={index}
                        style={{
                        display: 'inline-block'
                    }}>
                        <img src={image.url} alt="skateboarders" 
                        style={{
                            height: '100px',
                            width: '100px',
                        }}
                        />
                        <figcaption className='image-caption'> {image.title} </figcaption>
                    </figure>
                ))}
            </div>

        )

}

Thumbnail.proptypes = {
images:PropTypes.arrayOf(PropTypes.object).isRequired
};  //Q: This worked when I just had it listes as an array, is arrayOf optional?
