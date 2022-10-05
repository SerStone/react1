import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentService} from "../../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    let comments = useSelector(state => state.commentReducer.comments);

    let dispatch = useDispatch();

    useEffect(()=>{
        commentService.getAll().then(({data})=>dispatch({type:'Comments',payload:data}))
    },[])

    return (
        <div className={'Comments'}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};