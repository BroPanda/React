import React, {useEffect, useState} from 'react';

import './App.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import {userService} from "./services/user.services";
import {urls} from "./config/urls";
import './App.css'

const App = () => {
    let [users, setUsers] = useState(null);
    let [userId, setUserId] = useState(null);
    let [posts, setPosts] = useState(null);

    useEffect(() => {
        userService.getAllUsers(urls.users)
            .then(data => setUsers(data))
    }, [])

    const getUserID = (id) => {
        setUserId(id);
    }

    return (
        <div className={'d_flex space_around'}>
            {users && <Users users={users} getUserID={getUserID}/>}
            {userId && <UserDetails users={users} userId={userId}/>}

        </div>
    );
};

export default App;