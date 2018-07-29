const messages = (state = {}, action) => {
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

export default messages;

const getAllMessages = (state) => (
    Object.keys(state).map(id => state[id])
);

/* selectors */
export const filterMessagesByChannel = (state, channel) => (
    getAllMessages(state).filter(message => message.channel === channel)
);


