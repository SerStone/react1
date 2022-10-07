import React from 'react';
import {useDispatch} from "react-redux";
import {postActions} from "../../../redux";

const Post = ({post}) => {
    const dispatch = useDispatch();

    const {id,title,body} = post;

    return (
        <div>
            id: {id}<br/>
            title:{title}<br/>
            body:{body}<br/>
            <button onClick={()=>dispatch(postActions.setCurrentPost(post))}>setCurrentPost</button><br/>
            <button onClick={()=>dispatch(postActions.getById({id}))}>getById</button><br/>
            <button onClick={()=>dispatch(postActions.deleteById(id))}>deleteById</button>
        </div>
    );
};

export {Post};