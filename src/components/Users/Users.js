import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.services";
import {urls} from "../../config/urls";
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState(null);


    useEffect(() => {
        userService.getAllUsers(urls.users)
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            {users && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;