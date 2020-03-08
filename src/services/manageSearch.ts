import { getArtistList, getAlbumList, getAlbumDetails } from './apiService';
import { 
    getState,
    setArtistListResultState, 
    setAlbumListState, 
    setAlbumListResultTextState,
    setAlbumSelectedDetailsState, 
    setSearchInputState, 
    setCurrentSelectionIndexState, 
    setCurrentArtistSelectedIdState, 
    setCurrentAlbumSelectedIdState 
} from "../redux/actions/actions";


export function getSearchInput() {
    return getState().searchInput;
}

export function cleanSearchInput() {
    setSearchInputState('');
}

export function getCurrentSelectionIndex() {
    return getState().currentSelectionIndex;
}

export function getArtistListResult() {
    return getState().artistListResult;
}

export function cleanArtistListResult() {
    setArtistListResultState([]);
}

export function setArtistListResult(result: any) {
    setArtistListResultState(result);
}

export function cleanAlbumListResult() {
    setAlbumListState([]);
}

export function getAlbumListResult() {
    return getState().albumListResult;
}

export function cleanAlbumDetailsResult() {
    setCurrentAlbumSelected(null);
    setAlbumSelectedDetailsState(null);
}



export function getArtistFromListById(id:number, list: Array<any>) {
    return list.filter(artist => artist.id === id);
}

export function getIndexFromArtistById(id:number, list: Array<any>) {
    return list.findIndex(artist => artist.id === id);
}

export function getArtistFromArtistListByIndex(currentIndex:number, list: Array<any>) {
    return list.filter((artist, index) => index === currentIndex);
}

export function getCurrentArtistSelected() {
    return getState().currentArtistSelected;
}

export function setCurrentSelectionIndex(index: number) {
    setCurrentSelectionIndexState(index);
}

export function setCurrentArtistSelected(id: number) {
    setCurrentArtistSelectedIdState(id);
}

export function setCurrentAlbumSelected(id: number | null) {
    setCurrentAlbumSelectedIdState(id);
}


export function searchArtists(search: string) {
    cleanSearchInput();
    cleanArtistListResult();
    setSearchInput(search);

    return getArtistList(search);
    
}

export function searchAlbums(id: number) {
    const artistList = getArtistListResult();
    const artist = getArtistFromListById(id, artistList)[0];
    const artistText = artist ? artist.name: '';
    setAlbumListResultText(artistText);
    cleanSearchInput();
    cleanArtistListResult();
    cleanAlbumListResult();
    cleanAlbumDetailsResult();

    if (artist) {
        getAlbumList(artist.id)
        .then((result: any) => {
            setAlbumListState(result.data);
            
        });
    }
    
}

export function searchAlbumDetails(id: number) {
    setCurrentAlbumSelected(id);
    getAlbumDetails(id)
    .then((result: any) => {
        setAlbumSelectedDetailsState(result.data);        
    });
    
}

export function setSearchInput(search: string) {
    setSearchInputState(search);
}

export function setAlbumListResultText(search: string) {
    setAlbumListResultTextState(search);
}
