import React from 'react';
import User from "../User/User";

const Users = ({filteredUsers}) => {
    return (
        <div>
            {filteredUsers && filteredUsers.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;