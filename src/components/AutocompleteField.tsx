import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import IState from '../interface/state';
import IArtist from '../interface/artist';

import '../styles/AutocompleteField.scss';

import { 
    searchArtists, 
    getCurrentSelectionIndex, 
    setCurrentSelectionIndex,
    setCurrentArtistSelected,
    setArtistListResult, 
    setSearchInput, 
    getArtistListResult, 
    getArtistFromListById,
    getIndexFromArtistById,
    searchAlbums,
    getArtistFromArtistListByIndex
} from '../services/manageSearch';

class AutocompleteField extends Component<IState> {

    static contextTypes: { store: PropTypes.Requireable<object>; };

    onChange = (e: any) => {
        e.preventDefault();

        setCurrentSelectionIndex(0);
        
        searchArtists(e.target.value)
            .then((result: any) => {
                setArtistListResult(result.data.data);

        });

    }

    onKeyDown = (e: any) => {
        const currentSelectionIndex = getCurrentSelectionIndex();
        const artistList = getArtistListResult();
        let artist: IArtist;

        if (e.keyCode === 13) {
            artist = getArtistFromArtistListByIndex(currentSelectionIndex, artistList)[0];
            if (artist) {
                setCurrentArtistSelected(artist.id);
                setSearchInput(artist.name);
                searchAlbums(artist.id);
            }
        }

        else if (e.keyCode === 38) {
            if (currentSelectionIndex === 0) {
                return;
            }

            setCurrentSelectionIndex(currentSelectionIndex - 1);
        }

        else if (e.keyCode === 40) {
            if (currentSelectionIndex - 1 === artistList.length) {
                return;
            }

            setCurrentSelectionIndex(currentSelectionIndex + 1);
        }
    };

    onClick = (e: any) => {
        let artistList = getArtistListResult();
        if (artistList) {
            let artist = getArtistFromListById(e.target.value, artistList)[0];
            setSearchInput(artist.name);
            setCurrentSelectionIndex(getIndexFromArtistById(e.target.value, artistList))
            setCurrentArtistSelected(artist.id);
            searchAlbums(artist.id);
        }
        
    }

    render() {

        let artistList = this.props.artistListResult;
        let input = this.props.searchInput;
        let artistListComponent;

        if (artistList && artistList.length > 0) {
            artistListComponent = (
                <Scrollbars style={{ width: '100%', height: 200 }}>
                <ul className="artists">
                    {artistList.map((artist: any, index: number) => {
                        let className;

                        if (index === getCurrentSelectionIndex()) {
                            className = "artist-active";
                        }
                        return (
                            <li
                                className={className}
                                key={index}
                                value={artist.id}
                                onClick={this.onClick}
                            >
                                {artist.name}
                            </li>
                        );
                    })}
                </ul>
                </Scrollbars>
            );
        }
        return (
            <div className="autocomplete-container">
                <input
                    className="search-input"
                    id="outlined-basic"
                    placeholder="Search here"
                    type="text"
                    autoComplete="off"
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    value={input}
                />
                { artistListComponent ? (
                <div className="autocomplete-list-container">  
                    <div className="autocomplete-list">
                        <div className="autocomplete-list-label">Search results</div> 
                        {artistListComponent}
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


AutocompleteField.contextTypes = {
    store: PropTypes.object
};
export default connect(
    mapStateToProps,
    undefined
)(AutocompleteField);