import React from 'react';
import css from './App.module.css'
import {Routes,Route} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import User from "./components/User/User";
import Post from "./components/Post/Post";
import UserComments from "./components/UserComments/UserComments";

const App = () => {
    return (
        <div className={css.app}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={'user'} element={<User/>}>
                            <Route path={'userComments'} element={<UserComments/>}></Route>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={'post'} element={<Post/>}></Route>
                    </Route>
                </Route>
            </Routes>

        </div>);
};

export default App;