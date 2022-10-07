import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../../redux";

const User = ({user}) => {
    const dispatch = useDispatch();

    const {id,name,email,username} = user;

    return (
        <div>
            id: {id}<br/>
            name:{name}<br/>
            username:{username}<br/>
            email:{email}<br/>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>setCurrentUser</button><br/>
            <button onClick={()=>dispatch(userActions.getById({id}))}>getById</button><br/>
            <button onClick={()=>dispatch(userActions.deleteById(id))}>deleteById</button>
        </div>
    );
};

export {User};