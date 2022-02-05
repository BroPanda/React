import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Posts = () => {
    return (
        <div style={{display: "flex", background: "skyblue", height: '40px', justifyContent: "space-around"}}>

            <div style={{border: '1px solid red'}}>POSTS<NavLink to={'post'}>to post</NavLink></div>

            <div style={{border: '1px solid red'}}><Outlet/></div>

        </div>
    );
};

export default Posts;