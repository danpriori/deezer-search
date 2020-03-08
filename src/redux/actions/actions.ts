
import store from "../store/store";
import { 
  SET_ARTISTS, 
  SET_SEARCH_INPUT, 
  SET_CURRENT_SELECTION_INDEX, 
  SET_ALBUM_LIST, 
  SET_CURRENT_ARTIST_SELECTED, 
  SET_CURRENT_ALBUM_SELECTED, 
  SET_CURRENT_ALBUM_DETAILS, 
  SET_ALBUM_LIST_RESULT_TEXT 
} from './actionTypes';

export function setArtistListResultState(input: []) {
  store.dispatch({
    data: input,
    type: SET_ARTISTS
  })
}

export function setSearchInputState(input: string) {
  store.dispatch({
    data: input,
    type: SET_SEARCH_INPUT
  })
}

export function setAlbumListResultTextState(input: string) {
  store.dispatch({
    data: input,
    type: SET_ALBUM_LIST_RESULT_TEXT
  })
}

export function setCurrentSelectionIndexState(input: number) {
  store.dispatch({
    data: input,
    type: SET_CURRENT_SELECTION_INDEX
  })
}

export function setCurrentArtistSelectedIdState(input: number) {
  store.dispatch({
    data: input,
    type: SET_CURRENT_ARTIST_SELECTED
  })
}

export function setAlbumListState(input: []) {
  store.dispatch({
    data: input,
    type: SET_ALBUM_LIST
  })
}

export function setAlbumDetailsState(input: string) {
  store.dispatch({
    data: input,
    type: SET_CURRENT_ALBUM_DETAILS
  })
}

export function setCurrentAlbumSelectedIdState(input: number | null) {
  store.dispatch({
    data: input,
    type: SET_CURRENT_ALBUM_SELECTED
  })
}

export function setAlbumSelectedDetailsState(input: object | null) {
  store.dispatch({
    data: input,
    type: SET_CURRENT_ALBUM_DETAILS
  })
}


export function getState() {
  return store.getState();
}
