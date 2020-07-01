import { combineReducers } from 'redux';
import catagoryReducer from './catagoryReducer';
import homeworkReducer from './homeworkReducer'

export default combineReducers({
    catagory:catagoryReducer,
    homework:homeworkReducer
})