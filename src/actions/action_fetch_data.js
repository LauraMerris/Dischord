import * as api from '../data';

// returns an action object synchronously
const receiveMessages = (response) => ({
    type: 'RECEIVE_MESSAGES',
    payload: response 
});

const receiveChannels = (response) => ({
    type: 'RECEIVE_CHANNELS',
    payload: response
});

// exports a promise (asynchronous) that resolves to an action creator
export const fetchMessages = () => {
    return api.getMessages().then(response => receiveMessages(response))
};

export const fetchChannels = () => {
    return api.getChannelsData().then(response => receiveChannels(response))
};