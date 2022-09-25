import React, {useEffect, useState} from 'react';
import {postService} from "../../../services/post.service";
import {useParams} from "react-router-dom";
import {Post} from "../Post/Post";

const Posts = () => {

    const {id} = useParams()
    const [posts,setPosts] =  useState([]);


    useEffect(()=>{
        postService.getAll(id).then(({data})=>setPosts([data]))
    },[id])
    return (
        <div className={'Posts'}>
            {
                posts.map(post=> <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};