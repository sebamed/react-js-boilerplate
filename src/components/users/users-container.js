import React from 'react';
import { connect } from 'react-redux';

import UsersList from './users-list';
import * as actions from '../../store/actions'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAll();
    }

    render() {
        const { users = [] } = this.props;

        return <UsersList users={users} />;
    }

}

const mapStateToProps = state => {
    return {
        users: state.user.all
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAll: () => dispatch(actions.getAllUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);