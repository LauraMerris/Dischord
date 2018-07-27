import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.js'

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/:channel?" component={App} />
        </BrowserRouter>
    </Provider>
);

export default Root;

