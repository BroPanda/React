import React from 'react';
import Header from "./components/Header/Header";
import css from './App.module.css'
import Content from "./components/Content/Content";

const App = () => {
    return (
        <div className={css.app}>
                <Header/>

                <Content/>
        </div>);
};

export default App;