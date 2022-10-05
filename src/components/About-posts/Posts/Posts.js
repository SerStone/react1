import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postService} from "../../../services";
import {Post} from "../Post/Post";

const Posts = () => {
    let posts = useSelector(state => state.postReducer.posts);

    let dispatch = useDispatch();

    useEffect(()=>{
        postService.getAll().then(({data})=>dispatch({type:'Posts',payload:data}))
    },[])

    return (
        <div className={'Posts'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};