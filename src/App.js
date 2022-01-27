import React from 'react';

import {Routes, Route, Link} from "react-router-dom";
import css from './App.module.css'
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";

const App = () => {
    return (<>
        <Routes>
            <Route path={`/`} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={`users`} element={<UsersPage/>}/>
                <Route path={`posts`} element={<PostsPage/>}/>
                <Route path={`posts/:id`} element={<SinglePostPage/>}/>
                <Route path={`about`} element={<AboutPage/>}/>
                <Route path={`*`} element={<NotFoundPage/>}/>
            </Route>
        </Routes>


    </>);
};

export default App;