import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Users = () => {
    return (
        <div style={{display: "flex", background: "skyblue", height: '40px', justifyContent: "space-around"}}>

            <div style={{border: '1px solid red'}}>Users<NavLink to={'user'}>to user</NavLink></div>

            <div style={{border: '1px solid red'}}><Outlet/></div>

        </div>
    );
};

export default Users;