import { combineReducers } from 'redux';
import user from './reducer_user';
import users from './reducer_users';
import channels, * as fromChannels from './reducer_channels';
import messages, * as fromMessages from './reducer_messages';


const rootReducer = combineReducers({
    user,
    users,
    channels,
    messages
});

export default rootReducer;

/* selectors */

const getMessages = ({messages, users, channels}) => {
    
    /* converts messages hashtable into array of message objects */
    const allMessages = Object.keys(messages).map(id => messages[id]);

    /* denormalize child objects 'user' and 'channel' for each message */
    const newMessages = allMessages.map(message => ({
        ...message, 
        user: users[message.user],
        channel: channels[message.channel]
    }))

    return newMessages;

}

export const filterMessagesByChannel = (state, channel) => (
    fromMessages.filterMessagesByChannel(getMessages(state), channel)
);

export const getChannels = (state) => (
    fromChannels.getChannels(state.channels)
);


