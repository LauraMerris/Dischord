import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

ReactDOM.render(
    <Root store={store} />
    , document.getElementById('root')
);

