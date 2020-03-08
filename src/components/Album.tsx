import React, { Component } from 'react';
import { searchAlbumDetails } from '../services/manageSearch';
import '../styles/Album.scss';

import IAlbumProps from '../interface/albumProps';

export default class Album extends Component<IAlbumProps> {

    handleSubmission = (data: any) => {
        searchAlbumDetails(data.id);
    }

    render() {
        const album = this.props.album;
        return (
            <div className="album-list-content">
                <div className="album-list-thumb" onClick={this.handleSubmission.bind(this, album)}>
                    <img alt={album.title} src={album.cover_medium} />
                </div>
                <div className="album-list-title" onClick={this.handleSubmission.bind(this, album)}>
                    {album.title}
                </div>
            </div>
        );
    }
}

