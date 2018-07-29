import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import promise from 'redux-promise';

const dispatchPromise = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        if (typeof action.then !== 'function'){
            return rawDispatch(action)
        }
        return action.then(rawDispatch);
    }
}

const configureStore = () => {
    const store = createStore(rootReducer);
    store.dispatch = dispatchPromise(store);
    return store;
};


export default configureStore;