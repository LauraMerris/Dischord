const channels = (state = {}, action) => {
    switch (action.type){
        case 'RECEIVE_CHANNELS': 
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default channels; 

export const getChannels = (state) => (   
    Object.keys(state).map(i => state[i])
);