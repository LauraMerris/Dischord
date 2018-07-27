import { getInitialMessages } from '../data';

const initial = getInitialMessages();

const messages = (state = initial, action) => {
    switch(action.type){
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

export default messages;

/* selectors */
export const filterMessagesByChannel = (state, channel) => (
    state.filter(message => message.channel.id === channel)
);


