import React from 'react';

import User from "./User/User";
import s from "./Users.module.css";

const Users = ({users, getUserID}) => {
    return (
        <div className={s.users}>
            {users && users.map(user =>
                <User key={user.id} user={user} getUserID={getUserID}/>)}
        </div>
    );
};

export default Users;