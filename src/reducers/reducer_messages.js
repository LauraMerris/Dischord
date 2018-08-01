import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch(action.type){
        case 'RECEIVE_MESSAGES':
            return {...state, ...action.payload}
        case 'ADD_MESSAGE':
            return {...state, [action.payload.id]:action.payload};
        case 'DELETE_MESSAGE':
            // use square brackets when referring to the property as a variable
            const { [action.payload]: deletedObject , ...newState } = state;        
            return newState;
        default:
            return state;
    }
}

const allIds = (state = [], action) => {
        switch(action.type){
            case 'RECEIVE_MESSAGES':  
                return [...state, ...Object.keys(action.payload)];
            case 'ADD_MESSAGE':
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
    state.allIds.map(id => state.byId[id])
);

/* selectors */
export const filterMessagesByChannel = (state, channel) => {
    console.log('getting messages');
    const test = getAllMessages(state).filter(message => message.channel === channel);
    console.log(test);
    return test;
};


