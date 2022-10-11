import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Posts.module.css'
import {postActions} from "../../../redux";
import {Post} from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts,error,loading,postFromAPI} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(postActions.getAll())
    },[dispatch])



    return (
        <div>
            {loading && <h1>Wait Please!!!</h1>}
            {error&&<h1>Broken Computer!!!</h1>}
            <div className={css.postDiv}>
            {postFromAPI&&postFromAPI.title}
            </div>
            <div className={css.Posts}>
            {posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export {Posts};