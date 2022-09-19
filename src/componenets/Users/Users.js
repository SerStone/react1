import User from '../User/User';
import './user-style/user-style.css'

import {getUsersAxios} from "../../services/axiosGetter";

import {useEffect, useState} from "react";

export default  function Users({getPostsId}){

    let [users,setUsers] = useState([]);




    useEffect(()=>{
        getUsersAxios().then(value => setUsers(value.data))

    },[])


    return (
        <div className={'usersAll'}>

            <div className={'users'}>{users.map((user,index)=>(<User item={user} key={index} getPostsId={getPostsId}/>))} </div>

        </div>
    );
};

// export default Users;