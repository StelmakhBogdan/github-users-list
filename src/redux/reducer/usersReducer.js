import {FETCH_USERS, FETCH_USERS_ERROR} from '../types/types';

const initialState = {
  users: [],
  usersError: null,
}

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case FETCH_USERS_ERROR:
      return  { ...state, usersError: action.error };
    default:
      return state;
  }
};