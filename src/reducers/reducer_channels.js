import { getInitialChannels } from '../data';

const channels = (state = getInitialChannels()) => state;

export default channels; 

export const getChannels = (state) => (   
    Object.keys(state).map(i => state[i])
);