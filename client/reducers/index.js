import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import UserListReducer from './UserListReducer';

const rootReducer = combineReducers({UserListReducer, routing: routerReducer });

export default rootReducer;
