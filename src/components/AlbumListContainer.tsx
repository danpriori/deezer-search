import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import IState from '../interface/state';
import IAlbum from '../interface/album';

import Album from './Album';
import '../styles/AlbumList.scss';

class AlbumListContainer extends Component<IState> {

    static contextTypes: { store: PropTypes.Requireable<object>; };
    
    render() {
        const albumList = this.props.albumListResult;
        const albumListResultText = this.props.albumListResultText;
        const rows = new Array<object>();

        if (albumList && albumList.data && albumList.data.length > 0) {
            albumList.data.forEach((album: IAlbum, index: number | undefined) => {
                rows.push(
                    <Album
                        album={album} key={index} index={index}
                    />
                );
            });
        }
        return (
            <div className="album-list-container">
                { rows.length > 0 ?  ( 
                <div>
                    <div className="album-list-search">
                        <span>Search results for "{albumListResultText}"</span>
                    </div>
                    
                    <div className="album-list-header-title">
                        <span>ALBUMS</span>
                    </div>
                    <Scrollbars 
                        style={{ width: "100%", height: "375px", maxHeight: "375px", color: 'white' }} >
                        <div style={{ width: rows.length * 305, height: "320px", maxHeight: "320px" }} > {rows}</div>
                    </Scrollbars>
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
        albumListResultText: state.albumListResultText,
        currentArtistSelected: state.currentArtistSelected,
        currentAlbumSelected: state.currentAlbumSelected,
        currentAlbumDetails: state.currentAlbumDetails
    }
}

AlbumListContainer.contextTypes = {
    store: PropTypes.object
};
export default connect(
    mapStateToProps,
    undefined
)(AlbumListContainer);