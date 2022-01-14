import React from 'react';

import s from './UserDetails.module.css'

const UserDetails = ({users, userId, setUserIdPosts}) => {

    let user = users[userId-1]

    const showUserPosts = () => {
        setUserIdPosts(userId)

    }

    return (
        <div className={s.userDetails}>
            <h3>{user.id} {user.name}</h3>
            <p>{user.username}</p>

            <button onClick={showUserPosts}>GET ALL POSTS</button>

        </div>
    );
};

export default UserDetails;