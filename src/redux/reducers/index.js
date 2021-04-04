import { combineReducers } from 'redux';
import allGistsReducer from './gistsReducer';

const rootReducer = combineReducers({allGistsReducer});
export default rootReducer;