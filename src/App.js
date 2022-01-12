import React from 'react';
import s from './App.module.css'

import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";

const App = () => {
    return (
        <div>
            <div className={s.head}>
                <Users/>
                <Posts/>
            </div>

            <Comments/>

        </div>
    );
};

export default App;