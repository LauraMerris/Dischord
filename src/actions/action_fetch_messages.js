import * as api from '../data';

const receiveMessages = (response) => ({
    type: 'RECEIVE_MESSAGES',
    response 
});

// exports a promise that resolves to an action
export const fetchMessages = () => (
    api.getMessages().then(response => receiveMessages(response))
);