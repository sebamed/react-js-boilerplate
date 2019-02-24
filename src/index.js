import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';

import store from './store/store';
import history from './utils/config/history';
import App from './components/app'
import { IntlProvider } from 'react-intl';
import { en } from './assets/i18n/en'

ReactDOM.render(
    <Provider store={store} >
        <IntlProvider
            locale={en.locale}
            messages={en.messages} >
            <BrowserRouter>
                <Router history={history}>
                    <App />
                </Router>
            </BrowserRouter>
        </IntlProvider>
    </Provider>, document.getElementById('root')
);