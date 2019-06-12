import {
    GET_DONUTS
} from '../actions/types';

const initalState = {
    donutCollection: [],
    donutname: {}
}

export default function(state = initalState, action){
    switch (action.type){
        case GET_DONUTS:
        return {
            ...state,
            donutCollection: action.payload
        }
        default:
            return state;
    }
}

