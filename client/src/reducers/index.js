import {combineReducers} from 'redux';
import donutReducer from './donutReducer';



export default combineReducers({
    donut: donutReducer
});