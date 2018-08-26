import * as api from '../data';

// returns an action object synchronously

const requestMessages = (channel) => ({
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

// returns a function that exports a promise (asynchronous) that resolves to an action creator
export const fetchMessages = (channel) => (dispatch, getState) => {
    // do something with the state here
    dispatch({
        type: 'REQUEST_MESSAGES',
        channel: channel
    });

    return api.getMessages(channel).then(response => {
        dispatch({
            type: 'RECEIVE_MESSAGES',
            payload: response,
            channel: channel 
        });
    }, error => {
        dispatch({
            type: 'FETCH_MESSAGES_FAILURE',
            message: error.message || 'Something went wrong.',
            channel
        });
    });
};

export const fetchChannels = () => (dispatch, getState) => {
    // do something with the state here
    return api.getChannelsData().then(response => dispatch(receiveChannels(response)))
};