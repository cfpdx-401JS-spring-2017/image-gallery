import React from 'react';
import PropTypes from 'prop-types';
import DeleteImage from './DeleteImage';



export default function Thumbnail(props) {


    return (
        <div>
            {props.images.map((image, index) => (
                <figure key={index}
                    style={{
                        display: 'inline-block'
                    }}>
                    <a href={image.wiki}> <img className='thumbnail-image' src={image.url} alt="skateboarders"
                        style={{
                            height: '100px',
                            width: '100px',
                            transition: 'all .2s ease-in-out'
                        }}
                    />
                    </a>
                    <figcaption className='image-caption'> {image.title} </figcaption>
                    <DeleteImage removeImage={() => props.removeImage(props.albumId, image._id)} />
                </figure>
            ))}
        </div>

    )

}

Thumbnail.proptypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired

};  

