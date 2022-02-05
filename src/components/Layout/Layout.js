import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import UserComments from "../UserComments/UserComments";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>


        </div>
    );
};

export default Layout;