import React from 'react';
import {Route, Routes} from "react-router-dom";

import Home from "../Home/Home";
import Users from "../Users/Users";
import Posts from "../Posts/Posts";
import css from './content.module.css'

const Content = () => {
    return (
        <div className={css.content}>
            <div className={css.block1}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>
                </Routes>
            </div>
            <div>

            </div>
            
        </div>
    );
};

export default Content;