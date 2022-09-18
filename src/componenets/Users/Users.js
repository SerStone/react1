import User from '../User/User';
// import './user style/userMain.css'
import {getUsersAxios,getPostsAxios} from "../../services/axiosGetter";

import {useEffect, useState} from "react";

export default  function Users(){

    let [users,setUsers] = useState([]);
    let [user,setUser] = useState(null);

    const lift = (add)=>{
        setUser(add)
    }

    useEffect(()=>{
        getUsersAxios().then(value => setUsers(value))

    },[])


    return (
        <div className={'usersAll'}>
            <div className={'target'}>{user}</div>
            <div className={'users'}>{users.map((user,index)=>(<User item={user} key={index} lift={lift}/>))} </div>

        </div>
    );
};

// export default Users;