import { combineReducers } from 'redux';
import allGistsReducer from './allgistsreducer';

const rootReducer = combineReducers({allGistsReducer});
export default rootReducer;