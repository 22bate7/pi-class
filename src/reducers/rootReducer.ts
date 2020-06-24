import { combineReducers } from 'redux';
import catagoryReducer from './catagoryReducer';

export default combineReducers({
    catagory:catagoryReducer
})