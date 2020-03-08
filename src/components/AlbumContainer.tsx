import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IState from '../interface/state';
import AlbumListContainer from './AlbumListContainer';
import AlbumDetailsContainer from './AlbumDetailsContainer';

class AlbumContainer extends Component<IState> {

    static contextTypes: { store: PropTypes.Requireable<object>; };

    render() {
        const albumListResult = this.props.albumListResult;
        
        const currentAlbumDetails = this.props.currentAlbumDetails;

        return (
            <Fragment>
            { albumListResult && albumListResult.data && albumListResult.data.length > 0 ? (
                <AlbumListContainer albumListResult={albumListResult}/>
            ) : ''}
            { currentAlbumDetails ? (
                <AlbumDetailsContainer currentAlbumDetails={currentAlbumDetails}/>
            ) : ''}
            </Fragment>
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
        currentAlbumDetails: state.currentAlbumDetails
    }
}

AlbumContainer.contextTypes = {
    store: PropTypes.object
};
export default connect(
    mapStateToProps,
    undefined
)(AlbumContainer);