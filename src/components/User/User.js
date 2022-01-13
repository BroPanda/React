import React from 'react';

const User = ({user: {id, name}}) => {
    return (
        <div>
            <h3>{id} {name}</h3>
            <button>DETAILS</button>
        </div>
    );
};

export default User;