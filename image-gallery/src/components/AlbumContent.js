import React from 'react';
import { Route } from 'react-router-dom';
import Gallery from './Gallery';
import List from './List';
import Thumbnail from './Thumbnail';
import ViewButtons from './ViewButtons'

const Views={List, Thumbnail, Gallery}

export default function AlbumContent({ match, name, _id, images }) {
//TODO: Add props to handle delete and add for images in line 15 

    return (
        <div>
            <ViewButtons match={match}/>
            <Route path={`${match.url}/:View`} render={({ match }) => {
                const View = Views[match.params.View]
                return <View images={images} />
            }
            } />
        </div>

    )

}






