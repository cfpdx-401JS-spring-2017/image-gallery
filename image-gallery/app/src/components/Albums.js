import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Album from './Album';
import AlbumContent from './AlbumContent'


export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
        this.removeImage = (albumId, imageId) => {
            fetch(`/api/albums/${albumId}/remove/${imageId}`, {
                method: 'PATCH'
            })
                .then(res => res.json())
                .then(album => {
                    console.log('album:', album);
                    const index = this.state.albums.findIndex(album => album._id === albumId)
                    const albums = this.state.albums.slice()
                    albums[index] = album
                    this.setState({ albums })
                })
                .catch(error => console.log(error));
        };

        this.addImage = (albumId, image) => {
            fetch(`/api/albums/${albumId}/images`, {
                method: 'POST',
                body: JSON.stringify(image),
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
                .then(res => res.json())
                .then(album => {
                    const index = this.state.albums.findIndex(album => album._id === albumId)
                    const albums = this.state.albums.slice()
                    albums[index] = album
                    this.setState({ albums })
                })
                .catch(error => console.log(error));
        };

        this.addAlbum = (album) => {
            fetch('/api/albums', {
                method: 'POST',
                body: JSON.stringigy(album),
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
                .then(res => res.json())
                .then(newAlbum => {
                    this.setState({
                        albums: [...this.state.albums, album]
                    });
                });
        }


    }

    componentDidMount() {
        const { params } = this.props.match;
        this.fetchAlbum(params.albumId)
    }

    componentWillReceiveProps(nextProps) {
        const nextAlbumId = nextProps.match.params.albumId;
        if (nextAlbumId !== this.props.match.params.albumId) {
            this.fetchStore(nextAlbumId);
        }
    }


    fetchAlbum() {
        fetch(`/api/albums`)
            .then(res => res.json())
            .then(albums => this.setState({ albums }))
            .catch(error => console.log(error));
    }

    render() {
        const { match } = this.props;
        const { albums } = this.state;
        if (!albums) return <div>Loading ...</div>;

        return (
            <div className="album-list">
                <h1>Choose an Album:</h1>
                <ul>
                    {albums.map(album => <Album
                        key={album._id} {...album}
                        url={`${match.url}/${album._id}`} />
                    )}
                </ul>

                <Route path={`${match.url}/:albumId`} render={({ match }) => {
                    const album = albums.find(album => album._id === match.params.albumId)
                    return <AlbumContent
                        {...album}
                        albumId={album._id}
                        match={match}
                        removeImage={this.removeImage}
                        addImage={this.addImage} />
                }} />
                 <h1>Add A New Album:</h1>
                 <AddAlbum
            </div>

        );

    }
}

