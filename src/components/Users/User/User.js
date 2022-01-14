import React from 'react';

const User = ({user: {id, name}, getUserID}) => {

    let checkID = () => {
        getUserID(id)
    }

    return (
        <div>
            <h3>{id} {name}</h3>
            <button onClick={checkID}>DETAILS</button>
        </div>
    );
};

export default User;