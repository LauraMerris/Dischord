import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import promise from 'redux-promise';

const configureStore = () => (
    createStore(rootReducer, applyMiddleware(promise))
);

export default configureStore;