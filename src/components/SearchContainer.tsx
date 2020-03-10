import React, { Component } from 'react';

import Autocomplete from './Autocomplete';
import SearchButton from './SearchButton';

export default class SearchContainer extends Component {
    render() {
        
        return (
            <div className="search-container">
                <Autocomplete></Autocomplete>
                <SearchButton></SearchButton>
            </div>
        );
    }
  }