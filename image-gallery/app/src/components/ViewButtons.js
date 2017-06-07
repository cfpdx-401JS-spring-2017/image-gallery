import React from 'react';
import { Link } from 'react-router-dom';



export default function Buttons({match}){


    return(
        <div>
            <Link to={`${match.url}/List`}><span>
            <button className="view-buttons"
            >CHECK OUT LIST VIEW</button>
        </span>
        </Link>

       <Link to={`${match.url}/Thumbnail`}><span>
            <button className="view-buttons"
            >CHECK OUT THUMBNAIL VIEW</button>
        </span>
        </Link>

        <Link to={`${match.url}/Gallery`}><span>
            <button className="view-buttons"
            >CHECK OUT GALLERY VIEW</button>
        </span>
        </Link>
        </div>
    )
}