import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <ul className={'Navbar'}>
                <li><Link to={'/'}>Home Page</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts </Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>
        </div>
    );
};

export {Navigation};