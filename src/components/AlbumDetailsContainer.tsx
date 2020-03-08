import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IState from '../interface/state';

import Track from './Track';
import '../styles/AlbumDetails.scss';

class AlbumDetailsContainer extends Component<IState> {

    static contextTypes: { store: PropTypes.Requireable<object>; };
    
    render() {

        const albumDetails = this.props.currentAlbumDetails;
        const rows = new Array<object>();

        if (albumDetails 
            && albumDetails.tracks 
            && albumDetails.tracks.data 
            && albumDetails.tracks.data.length > 0) {
            albumDetails.tracks.data.forEach((track: any, index: number) => {
                rows.push(
                    <Track
                        release_date={albumDetails.release_date} track={track} key={index} index={index}
                    />
                );
            });
        }
        return (
            <div className="album-details-container">
                { albumDetails ? (
                <div>
                    <div className="album-details-cover">
                        <img alt={albumDetails.title} src={albumDetails.cover_medium} />
                    </div>
                    <div className="album-details-title">
                            {albumDetails.title}
                    </div>
                    <div className="album-details-content">
                        <table className="table-tracklist">
                            <thead className="table-head-tracklist">
                                <tr>
                                    <th></th>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Artist</th>
                                    <th>Time</th>
                                    <th>Released</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="table-body-tracklist">{rows}</tbody>
                        </table>
                    </div>
                </div>
                 ) : '' }
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        artistListResult: state.artistListResult,
        searchInput: state.searchInput,
        currentSelectionIndex: state.currentSelectionIndex,
        albumListResult: state.albumListResult,
        currentArtistSelected: state.currentArtistSelected,
        currentAlbumSelected: state.currentAlbumSelected,
        currentAlbumDetails: state.currentAlbumDetails,
    }
}

AlbumDetailsContainer.contextTypes = {
    store: PropTypes.object
};
export default connect(
    mapStateToProps,
    undefined
)(AlbumDetailsContainer);