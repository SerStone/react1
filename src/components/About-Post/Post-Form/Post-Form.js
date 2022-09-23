import React from 'react';
import {useForm} from "react-hook-form";
import {postService} from "../../../services/post.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../../../validators/post.validator";


const PostForm = ({setPosts}) => {

    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(postValidator),
        mode:"all"

    });

    const submit = (obj) => {
        postService.createPost(obj).then(({data}) => setPosts(posts => [...posts,data]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={'PostForm'}>
            <input type={'text'} placeholder={'title'} {...register('title')}/>
            {errors.title && <span>{errors.title.message}</span>}
            <input type={'text'} placeholder={'body'}{...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}
            <button disabled={!isValid}>Submit</button>
        </form>
    );
};

export {PostForm};