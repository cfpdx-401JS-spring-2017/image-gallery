import React from 'react';
import { Link, Route } from 'react-router-dom';


export default function Header(props) {

    return(
    <div className="header-container">
        <header className="header-title">
            <Link className='Link' to={'/'} >
            <h1> The Zephr Originals. </h1>
            <h2>Z-Girls & Z-Boys of the 70's</h2>
            </Link>
        </header>

        <span>
            <button className="view-buttons"

            >CHECK OUT LIST VIEW</button>
        </span>
        <span>
            <button className="view-buttons"

            >CHECK OUT THUMBNAIL VIEW</button>
        </span>
        <span>
            <button className="view-buttons"
            >CHECK OUT GALLERY VIEW</button>
        </span>
    </div>

    )}