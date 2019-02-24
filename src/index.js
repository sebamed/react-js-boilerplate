import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';

import store from './store/store';
import history from './utils/config/history';
import App from './components/app'

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Router history={history}>
                <App />
            </Router>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);