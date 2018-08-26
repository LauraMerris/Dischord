import * as api from '../data';

export const addMessage = (message, channel) => (dispatch) => {
    
    return api.addMessage(message, channel).then(response => {
        dispatch({
            type: 'ADD_MESSAGE',
            payload: response
        });
    });

};