import React from 'react';

const User = props => {
    const { user } = props;
    return (
        <div><b>{user.name}</b> - <i>{user.email}</i></div>
    );
}

export default User;