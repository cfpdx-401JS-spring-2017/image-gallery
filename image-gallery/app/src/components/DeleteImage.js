import React from 'react';
import PropTypes from 'prop-types';

export default function DeleteImage({ removeImage }) {

DeleteImage.propTypes = {
   removeImage: PropTypes.func.isRequired
}


return (
    <button className="delete-button"
        onClick={removeImage}>
        DELETE IMAGE
            </button>
)

}