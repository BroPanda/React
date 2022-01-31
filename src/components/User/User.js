import React from 'react';

const User = ({user: {name, username, email}}) => {
    return (
        <div>
            <p>{name} {username} {email}</p>
        </div>
    );
};

export default User;