import React from 'react';
import PropTypes from 'prop-types';

export default function DeleteAlbum({ removeAlbum}) {

DeleteAlbum.propTypes = {
   removeAlbum: PropTypes.func.isRequired
}


return (
    <button className="delete button"onClick={removeAlbum}>
        DELETE ALBUM </button>
)

}