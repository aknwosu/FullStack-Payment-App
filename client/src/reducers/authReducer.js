import { FETCH_USER } from '../actions/types'

export default function (state = null, action) {
    console.log("action 1: ", action);
    switch(action.type) {
        case FETCH_USER: 
        return action.payload || false; //enables an empty string to returrn false
        default: return state;
    }
}