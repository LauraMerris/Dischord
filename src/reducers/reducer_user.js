import { getUser } from '../data';

const user = (state = getUser()) => state;

export default user