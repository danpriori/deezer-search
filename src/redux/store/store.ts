import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

const initialState = {
  artistListResult: [],
  searchInput: '',
  currentSelectionIndex: 0,
  albumListResult: [],
  albumListResultText: '', 
  currentArtistSelected: null,
  currentAlbumSelected: null,
  currentAlbumDetails: null
};

export default createStore(
  rootReducer,
  initialState
);