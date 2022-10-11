import css from './Header.module.css'

import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost} = useSelector(state => state.postReducer);
    return (


            <ul className={css.Header}>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts </Link></li>

            {currentUser&&currentUser.name}
            {currentPost&&currentPost.title}
            </ul>



    );
};

export {Header};