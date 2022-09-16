import User from '../Users/User';
import './user style/userMain.css'

import {useEffect, useState} from "react";

export default  function Users(){

    let [users,setUsers] = useState([]);
    let [user,setUser] = useState(null);

    const lift = (add)=>{
        setUser(add)
    }

    useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value)
            console.log(value);
        })
        },[])


    return (
        <div className={'usersAll'}>
            <div className={'target'}>{user}</div>
            <div className={'users'}>{users.map((user,index)=>(<User item={user} key={index} lift={lift}/>))} </div>

        </div>
    );
};

// export default Users;