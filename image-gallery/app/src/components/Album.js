import React from 'react';
import { Link } from 'react-router-dom';
import DeleteAlbum from './DeleteAlbum'

export default function Album({ name, images, _id, url, removeAlbum, index }) {
    return (
        <span >
            <span className='delete-album'>
                <h1 className="album-list">
                    <Link className="Link album" to={url}>  {name}
                    </Link >
                </h1>
            </span>
            <span className='delete-album-button'>
                <DeleteAlbum removeAlbum={() => removeAlbum(_id, index)} />
            </span>
        </span>
    );
}