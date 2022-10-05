import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {User} from "../User/User";

const Users = () => {

    let users = useSelector(state => state.userReducer.users);
    console.log(users)
    let dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch({type:'Users',payload:value})
            })
    },[])

    return (
        <div>
            {
                users.map(stat => <User/>)
            }
        </div>
    );
};

export {Users};