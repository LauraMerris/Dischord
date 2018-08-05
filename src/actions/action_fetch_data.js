import * as api from '../data';

// returns an action object synchronously

export const requestMessages = (channel) => ({
    type: 'REQUEST_MESSAGES',
    channel: channel
});

const receiveMessages = (response, channel) => ({
    type: 'RECEIVE_MESSAGES',
    payload: response,
    channel: channel 
});

const receiveChannels = (response) => ({
    type: 'RECEIVE_CHANNELS',
    payload: response
});

// exports a promise (asynchronous) that resolves to an action creator
export const fetchMessages = (channel) => {
    return api.getMessages(channel).then(response => receiveMessages(response, channel))
};

export const fetchChannels = () => {
    return api.getChannelsData().then(response => receiveChannels(response))
};