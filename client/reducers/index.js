import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userList from './userList';

const rootReducer = combineReducers({userList, routing: routerReducer });

export default rootReducer;
