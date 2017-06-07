import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Gallery from './Gallery';
import List from './List';
import Thumbnail from './Thumbnail';
import ViewButtons from './ViewButtons';
import AddImage from './AddImage';

const Views = { List, Thumbnail, Gallery }

class AlbumContent extends Component {


    render() {
        const { match, images, albumId, removeImage, addImage } = this.props
        return (

            <div>
                <ViewButtons match={match} />
                <Route path={`${match.url}/:View`} render={({ match }) => {
                    const View = Views[match.params.View]
                    return <View
                        images={images}
                        albumId={albumId}
                        removeImage={removeImage}
                        />
                }
                } />
                <div className="control">
                    <AddImage 
                    handleAdd={addImage}
                    albumId={albumId}
                    />
                </div>
            </div>

        )
    }
}


export default AlbumContent;







