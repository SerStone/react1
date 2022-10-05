import React from 'react';
import {BrowserRouterLink,Link, Route, Routes} from "react-router-dom";

const MainLayout = () => {



    return (
        <div>
            {/*<ul className={'Navbar'}>*/}
            {/*    <li><Link to={'/'}>Home Page</Link></li>*/}
            {/*    <li><Link to={'/todos'}>Todos</Link></li>*/}
            {/*    <li><Link to={'/albums'}>Albums </Link></li>*/}
            {/*    <li><Link to={'/comments'}>Comments</Link></li>*/}
            {/*</ul>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<Home/>}/>*/}
            {/*    <Route path={'/todos'} element={<Todos/>}/>*/}
            {/*    <Route path={'/albums'} element={<Albums/>}/>*/}
            {/*    <Route path={'/comments'} element={<Comments/>}/>*/}
            {/*    <Route path={'/comments/:id'} element={<Posts/>}/>*/}
            {/*</Routes>*/}
        </div>
    );
};

export {MainLayout};