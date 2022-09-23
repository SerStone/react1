import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../../validators";


const UserForm = ({setUsers}) => {

    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
resolver: joiResolver(userValidator),
        mode:"all"

    });

    const submit = (obj) => {
        userService.createUser(obj).then(({data}) => setUsers(users => [...users,data]))
        reset()
    }

    return (
<form onSubmit={handleSubmit(submit)} className={'UserForm'}>
    <input type={'text'} placeholder={'name'} {...register('name')}/>
    {errors.name && <span>{errors.name.message}</span>}
    <input type={'text'} placeholder={'username'}{...register('username')}/>
    {errors.username && <span>{errors.username.message}</span>}
    <input type={'text'} placeholder={'email'}{...register("email")}/>
    {errors.email && <span>{errors.email.message}</span>}
    <button disabled={!isValid}>Submit</button>
</form>
    );
};

export {UserForm};