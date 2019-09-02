import { ShopActionTypes } from './shop.types';

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} = ShopActionTypes;

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  error: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;
