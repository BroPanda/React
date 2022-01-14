import React from 'react';

import User from "../User/User";

const Users = ({users, getUserID}) => {
    return (
        <div>
            {users && users.map(user => <User key={user.id} user={user} getUserID={getUserID}/>)}
        </div>
    );
};

export default Users;