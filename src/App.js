import React, {useEffect, useState} from 'react';


import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import {userService} from "./services/user.services";
import {urls} from "./config/urls";
import s from './App.module.css'
import UserComments from "./components/UserComments/UserComments";

const App = () => {
    let [users, setUsers] = useState(null);
    let [userId, setUserId] = useState(null);
    let [userIdPosts, setUserIdPosts] = useState(null);

    useEffect(() => {
        userService.getAllUsers(urls.users)
            .then(data => setUsers(data))
    }, [])

    const getUserID = (id) => {
        setUserId(id);
    }

    console.log(userId, userIdPosts)

    return (
        <div className={`${s.container}`}>
            <div className={`${s.d_flex}`}>
                {users && <Users users={users} getUserID={getUserID} />}
                {userId && <UserDetails users={users} userId={userId} setUserIdPosts={setUserIdPosts}/>}
            </div>
            <div>
                {userIdPosts && <UserComments userIdPosts={userIdPosts}/>}
            </div>
        </div>

    );
};

export default App;