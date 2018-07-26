import React from 'react';
import Router from './Router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from  './reducers';

const store = createStore(rootReducer, devToolsEnhancer());

const SeriesApp = props => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default SeriesApp;