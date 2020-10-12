import {FETCH_USER_DETAIL, FETCH_USER_DETAIL_ERROR} from '../types/types';

const initialState = {
  userDetail: [],
  userDetailError: null,
  isLoading: false,
}

export const userDetailReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_USER_DETAIL:
      return { ...state, userDetail: action.payload };
    case FETCH_USER_DETAIL_ERROR:
      return  { ...state, userDetailError: action.error };
    default:
      return state;
  }
};