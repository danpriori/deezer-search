import { 
  SET_ARTISTS, 
  SET_SEARCH_INPUT, 
  SET_CURRENT_SELECTION_INDEX, 
  SET_ALBUM_LIST, 
  SET_CURRENT_ARTIST_SELECTED, 
  SET_CURRENT_ALBUM_SELECTED, 
  SET_CURRENT_ALBUM_DETAILS, 
  SET_ALBUM_LIST_RESULT_TEXT 
} from '../actions/actionTypes';

export default function rootReducer(state: any, action: any) {
  
  switch(action.type) {
    case SET_ARTISTS:
      return {
        ...state,
        artistListResult: action.data,
      };

    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.data
      };
      

    case SET_ALBUM_LIST_RESULT_TEXT:
      return {
        ...state,
        albumListResultText: action.data
      };

    case SET_CURRENT_SELECTION_INDEX:
      return {
        ...state,
        currentSelectionIndex: action.data
      };

    case SET_ALBUM_LIST:
      return {
        ...state,
        albumListResult: action.data
      };

    case SET_CURRENT_ARTIST_SELECTED:
      return {
        ...state,
        currentArtistSelected: action.data
      };
    case SET_CURRENT_ALBUM_SELECTED:
        return {
          ...state,
          currentAlbumSelected: action.data
        };
    case SET_CURRENT_ALBUM_DETAILS:
        return {
          ...state,
          currentAlbumDetails: action.data
        };
    default:
      return state;
  };
}
