import React from 'react';
import {NavLink} from "react-router-dom";
import css from './header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <div><NavLink to={'/'}>HOME</NavLink></div>
            <div><NavLink to={'/users'}>USERS</NavLink></div>
            <div><NavLink to={'/posts'}>POSTS</NavLink></div>
        </div>
    );
};

export default Header;
