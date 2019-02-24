import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = props => {
    return (
        <div>
            <b>
                <FormattedMessage id='home.welcome.title' defaultMessage='Welcome' />
            </b>
            <p>
                <FormattedMessage id='home.welcome.text' />
            </p>
        </div>
    );
}

export default Home;