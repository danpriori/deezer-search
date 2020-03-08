import React, { Component } from "react";
import { Container } from '@material-ui/core';

import IState from '../interface/state';

import SearchContainer from './SearchContainer';
import AlbumContainer from './AlbumContainer';

import '../styles/MainContainer.scss';

export default class MainContainer extends Component<IState> {

    render() {

        return (
            <Container>
            <div className="main-container">
                <div>
                    <SearchContainer />
                </div>
                <div>
                    <AlbumContainer />
                </div>
            </div>
            </Container>
        );
    }
}

