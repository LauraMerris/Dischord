import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware => (
        store.dispatch = middleware(store)(store.dispatch)
    ))
}

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('%c prev state','color: gray', store.getState());
    console.log('%c action','color: blue', action);
    const returnValue = next(action);
    console.log('%c next state','color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
}

/*
const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function'){
        return action(store.dispatch)
    }
    return next(action);
};
*/

const promise = (store) => (next) => (action) => {
    if (typeof action.then !== 'function'){
        return next(action)
    }
    return action.then(next);
}

const configureStore = () => {
    const store = createStore(rootReducer);
    const middlewares = [thunk, logger];
    wrapDispatchWithMiddlewares(store, middlewares);
    return store;
};




export default configureStore;