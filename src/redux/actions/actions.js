import {
  FETCH_USER_DETAIL_ERROR,
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USER_DETAIL
} from '../types/types';


const rootUrl = 'https://api.github.com';

export const fetchUsers = () => {
  return dispatch => {
    return fetch(`${rootUrl}/users?per_page=100`)
      .then(response => {
        if (response.status !== 200) {
          return dispatch({ type: FETCH_USERS_ERROR, error: JSON.stringify('Error: ' + response.status)})
        }
        return response.json();
      })
      .then(data => {
        return dispatch({ type: FETCH_USERS, payload: data});
      })
      .catch(err => {
        return dispatch({ type: FETCH_USERS_ERROR, error: JSON.stringify(err)})
      })
  };
};

export const fetchUsersDetails = (login) => {
  return dispatch => {
    return fetch(`${rootUrl}/users/${login}`)
      .then(response => {
        if (response.status !== 200) {
          return dispatch({ type: FETCH_USER_DETAIL_ERROR, error: JSON.stringify('Error: ' + response.status)})
        }
        return response.json();
      })
      .then(data => {
        //console.log("data", data);
        return dispatch({ type: FETCH_USER_DETAIL, payload: data});
      })
      .catch(err => {
        return dispatch({ type: FETCH_USER_DETAIL_ERROR, error: JSON.stringify(err)})
      })
  };
};
