import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IState from '../interface/state';

import '../styles/SearchButton.scss';
import { searchAlbums, getCurrentArtistSelected } from "../services/manageSearch";

class SearchButton extends Component {
    
    static contextTypes: { store: PropTypes.Requireable<object>; };
    
    handleSubmission = (e: any) => {
        e.preventDefault();
        const artistId = getCurrentArtistSelected();
        searchAlbums(artistId);
    }

    render() {
        
        return (
            <div className="search-button" onClick={this.handleSubmission} >
                SEARCH
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
        currentArtistSelected: state.currentArtistSelected
    }
}


SearchButton.contextTypes = {
    store: PropTypes.object
};
export default connect(
    mapStateToProps,
    undefined
)(SearchButton);