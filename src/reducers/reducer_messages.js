import { combineReducers } from 'redux';
import byId, * as fromId from './reducer_byId';


const allIds = (state = [], action) => {
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

const messages = combineReducers({
    byId,
    allIds
});

export default messages;

const getAllMessages = (state) => (
    state.allIds.map(id => fromId.message(state.byId, id))
);

/* selectors */
export const filterMessagesByChannel = (state, channel) => {
    console.log('getting messages');
    const test = getAllMessages(state).filter(message => message.channel === channel);
    console.log(test);
    return test;
};


