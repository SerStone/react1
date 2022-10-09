import React from 'react';
import {useDispatch} from "react-redux";

import css from './Post.module.css'
import {postActions} from "../../../redux";

const Post = ({post}) => {
    const dispatch = useDispatch();

    const {id,title,body} = post;

    return (
        <div className={css.post}>
            id: {id}<br/>
            title:{title}<br/>
            body:{body}<br/>
            <div className={css.postButtons}>
            <button className={css.buttonPost} onClick={()=>dispatch(postActions.setCurrentPost(post))}>setCurrentPost</button><br/>
            <button className={css.buttonPost} onClick={()=>dispatch(postActions.getById({id}))}>getById</button><br/>
            <button className={css.buttonPost} onClick={()=>dispatch(postActions.deleteById(id))}>deleteById</button>
            </div>
        </div>
    );
};

export {Post};