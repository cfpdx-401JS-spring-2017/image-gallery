import React from 'react';
import introImage from '../photos/introImage.jpg'

export default function Intro() {

    return (
        <div className='intro-image brighten'>
            <a className="video" href='https://www.youtube.com/watch?v=cKC-XBwQ_pA'>
                <img src={introImage} alt='standing on boards' />
            </a>
            <span className="play-video"><h1>PLAY VIDEO</h1></span>

        </div>
    )
}