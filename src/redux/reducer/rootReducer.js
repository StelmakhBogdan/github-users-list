 import {combineReducers} from 'redux';

import {usersReducer} from './usersReducer';
 import {userDetailReducer} from './userDetailReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  userDetails: userDetailReducer
});