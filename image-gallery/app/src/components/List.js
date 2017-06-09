import React from 'react';
import PropTypes from 'prop-types';
import DeleteImage from './DeleteImage'


    export default function List (props) {

        return (
            <div>
                {props.images.map(image => (
                    <ul className="list-view" key={image._id}>
                        <li className="image-caption">{image.title} </li>
                        <li className="image-caption">{image.description} </li>
                        <li className="image-caption">{image.url} </li>
                        <li><DeleteImage removeImage={() => props.removeImage(props.albumId, image._id)}/></li>
                    </ul>))}
            </div>


        )
    }

    List.proptypes = {
images:PropTypes.array.isRequired,
onDelete:PropTypes.func.isRequired

};

