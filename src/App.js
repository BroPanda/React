import React, {useEffect, useState} from 'react';

import './App.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";

const App = () => {
    const [form, setForm] = useState({name: ``, username: ``, email: ``});
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    console.log(filteredUsers);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers(...[value])
            setFilteredUsers(...[value])
        })
    }, [])

    const getFiltered = (data) => {
        let filter = [...users]
        filter = users.filter(
            user => user.name.toLowerCase().includes(data.name.toLowerCase()) &&
                user.username.toLowerCase().includes(data.username.toLowerCase()) &&
                user.email.toLowerCase().includes(data.email.toLowerCase())
        )
        setFilteredUsers(filter)
    }


    return (
        <div>
            <Form form={form} setForm={setForm} getFiltered={getFiltered}/>
            <Users filteredUsers={filteredUsers}/>
        </div>
    );
};

export default App;