import React from 'react';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import UsersContainer from './users/users-container';
import Home from './home/home';
import '../style/_base.scss'

const App = props => {

    return (
        <div>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/users">Users</Link>
            <br />
            <Switch>
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/home" render={() => <Home />} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );

}

export default withRouter(App);