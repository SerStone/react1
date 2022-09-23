import React, {useEffect, useState} from 'react';


import {userService} from "../../../services";
import {UserForm} from "../UserForm/UserForm";
import User from "../User/User";



const Users = ({getUserId}) => {

    const [users,setUsers] = useState([]);


    useEffect(()=>{
        userService.getAll().then(({data}) => setUsers(data))
    },[])

    return (
        <div className={'All-users'}>
            <div><UserForm setUsers={setUsers}/></div>
            <div className={'Users'}>{
                users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)
            }</div>
        </div>
    );
};

export {Users};