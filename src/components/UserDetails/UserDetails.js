import React from 'react';

const UserDetails = ({users, userId}) => {
    let user = users[userId]
    return (
        <div>
            <h3>{user.id} {user.name}</h3>
            
        </div>
    );
};

export default UserDetails;