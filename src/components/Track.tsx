import React, { Component } from 'react';
import moment from 'moment';

import Grow from '@material-ui/core/Grow';

import ITrackProps from '../interface/trackProps';

import '../styles/Track.scss';

export default class Track extends Component<ITrackProps> {

    render() {
        const track = this.props.track;
        const release_date = this.props.release_date;
        const index = this.props.index + 1;
        const maxLengthTitle = 60;
        const maxLengthName = 30;
        let title = '';
        if (track.title.length > maxLengthTitle) {
            title = track.title.substring(0, maxLengthTitle) + '...';
        } else {
            title = track.title;
        }
        let name = '';
        if (track.artist.name.length > maxLengthName) {
            name = track.artist.name.substring(0, maxLengthName) + '...';
        } else {
            name = track.artist.name;
        }
        let duration = moment.utc(track.duration*1000).format('m:ss');
        let release = moment(release_date,"YYYY-MM-DD").year();

        return (
            <Grow in={true}>
                <tr className="table-row-tracklist">
                    <td> </td>
                    <td> {index}</td>
                    <td> {title}</td>
                    <td> {name} </td>
                    <td> {duration}</td>
                    <td> {release}</td>
                    <td> </td>
                </tr>
            </Grow>
        );
    }
}

