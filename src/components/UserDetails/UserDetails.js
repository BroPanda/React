import React from 'react';

import s from './UserDetails.module.css'

const UserDetails = ({users, userId}) => {
    let user = users[userId - 1]
    return (
        <div className={s.userDetails}>
            <h3>{user.id} {user.name}</h3>
            <p>{user.username}</p>

        </div>
    );
};

export default UserDetails;