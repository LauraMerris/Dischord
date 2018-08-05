import { combineReducers } from 'redux';
import byId, * as fromId from './reducer_byId';
import allIds, * as fromAllIds from './reducer_allIds';

const messages = combineReducers({
    byId,
    allIds
});

export default messages;

/* selectors */

// encapsulated 
const getAllMessages = (state) => (
    fromAllIds.messages(state.allIds).map(id => fromId.message(state.byId, id))
);

export const filterMessagesByChannel = (state, channel) => {
    console.log('getting messages');
    const test = getAllMessages(state).filter(message => message.channel === channel);
    console.log(test);
    return test;
};

export const getIsFetching = (state) => {
    console.log('getting fetching flag');
    console.log(state);
    return fromAllIds.getIsFetching(state.allIds);
}


