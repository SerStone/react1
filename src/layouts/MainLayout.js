import React from 'react';
import {BrowserRouterLink,Link, Route, Routes} from "react-router-dom";
import {Comments, Home, Posts, Users} from "../components";

const MainLayout = () => {



    return (
        <div>
            <ul className={'Navbar'}>
                <li><Link to={'/'}>Home Page</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts </Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
            </Routes>
        </div>
    );
};

export {MainLayout};