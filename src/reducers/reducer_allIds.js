import { combineReducers} from 'redux';

const ids = (state = [], action) => {
    switch(action.type){
        case 'RECEIVE_MESSAGES':  
            const comb = [...state, ...Object.keys(action.payload)];
            // only return non-duplicates
            return [...new Set(comb)];
        case 'ADD_MESSAGE':
            // should check for duplicate id here
            return [...state, action.payload.id];
        case 'DELETE_MESSAGE':
            return state.filter(item => item !== action.payload.id);
        default:
            return state;
    }
}

const isFetching = (state = false, action) => {
    switch (action.type){
        case 'REQUEST_MESSAGES':
            return true;
        case 'RECEIVE_MESSAGES':
        case 'FETCH_MESSAGES_FAILURE':
            return false;
        default:
            return state;
    }
}

const errorMessage = (state = null, action) => {
    switch (action.type){
        case 'FETCH_MESSAGES_FAILURE':
            return action.message;
        case 'REQUEST_MESSAGES':
        case 'RECEIVE_MESSAGES':
            return null;
        default:
            return state;
    }
}

const allIds = combineReducers({
    ids,
    isFetching,
    errorMessage
})

export default allIds;

/* selectors */

export const messages = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;