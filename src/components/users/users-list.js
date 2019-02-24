import React from 'react';
import User from './user';

const UsersList = props => {
    const { users } = props;
    return (
        users.map((user, i) => {
            return <User key={i} user={user} />
        })
    );
}

export default UsersList;