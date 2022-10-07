import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../../redux";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users,error,loading,userFromAPI} = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userActions.getAll())
    },[])



    return (
        <div>
            {loading && <h1>Wait Please!!!</h1>}
            {error&&<h1>Broken Computer!!!</h1>}
            {userFromAPI&&userFromAPI.email}
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};