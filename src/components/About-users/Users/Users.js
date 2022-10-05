import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {User} from "../User/User";
import {userService} from "../../../services";

const Users = () => {

    let users = useSelector(state => state.userReducer.users);

    let dispatch = useDispatch();

    useEffect(()=>{
        userService.getAll().then(({data})=>dispatch({type:'Users',payload:data}))
    },[])

    return (
        <div className={'Users'}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};