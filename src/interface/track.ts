import IArtist from './artist';

export default interface ITrack {
    title: string,
    artist: IArtist;
    duration: number;
}
