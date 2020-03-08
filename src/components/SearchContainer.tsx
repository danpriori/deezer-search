import React, { Component } from 'react';

import AutocompleteField from './AutocompleteField';
import SearchButton from './SearchButton';

export default class SearchContainer extends Component {
    render() {
        
        return (
            <div className="search-container">
                <AutocompleteField></AutocompleteField>
                <SearchButton></SearchButton>
            </div>
        );
    }
  }