import axios from 'axios';

import {
    GET_DONUTS
} from './types';

export const getDonuts = () => dispatch => {
    axios.get('http://localhost:5000/donuts/all')
    .then(donutCollection => dispatch({
        type: GET_DONUTS,
        payload: donutCollection
    }));
}

