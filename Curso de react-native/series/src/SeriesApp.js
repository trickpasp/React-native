import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';

const SeriesApp = props => (
    <Provider>
        <Router />
    </Provider>
);

export default SeriesApp;