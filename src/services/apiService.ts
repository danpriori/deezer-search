import axios from "axios";

//let proxy = 'https://cors-anywhere.herokuapp.com/';
//let proxy = 'https://crossorigin.me/';
let proxy = 'https://api.codetabs.com/v1/proxy?quest=';

export function getArtistList(search: string) {
    return axios.get(proxy + 'https://api.deezer.com/search/artist?q=' + search);    
}

export function getAlbumList(search: string) {
    return axios.get(proxy + 'https://api.deezer.com/artist/' + search + '/albums');    
}

export function getAlbumDetails(search: number) {
    return axios.get(proxy + 'https://api.deezer.com/album/' + search);    
}

