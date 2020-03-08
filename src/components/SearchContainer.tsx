import React, { Component } from 'react';

import AutocompleteField from './AutocompleteField';
import SearchButton from './SearchButton';

export default class SearchContainer extends Component {
    handleSubmission = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    }

    render() {
        
        return (
            <div className="search-container">
                <AutocompleteField></AutocompleteField>
                <SearchButton></SearchButton>
            </div>
        );
    }
  }