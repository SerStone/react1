import React from 'react';
import {useDispatch} from "react-redux";

import css from './User.module.css';
import {userActions} from "../../../redux";

const User = ({user}) => {
    const dispatch = useDispatch();

    const {id,name,email,username} = user;

    return (
        <div className={css.User}>
            id: {id}<br/>
            name:{name}<br/>
            username:{username}<br/>
            email:{email}<br/>
            <button className={css.buttonUser} onClick={()=>dispatch(userActions.setCurrentUser(user))}>setCurrentUser</button><br/>
            <button className={css.buttonUser} onClick={()=>dispatch(userActions.getById({id}))}>getById</button><br/>
            <button className={css.buttonUser} onClick={()=>dispatch(userActions.deleteById(id))}>deleteById</button>
        </div>
    );
};

export {User};