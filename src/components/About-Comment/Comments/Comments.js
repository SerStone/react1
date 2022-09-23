import React from 'react';
import Comment from "../Comment/Comment";
import {CommentForm} from "../CommentForm/CommentForm";

const Comments = ({comments,setComments}) => {
    return (
        <div className={'Comments'}>
            <div><CommentForm setComments={setComments}/></div>
            {

                comments.map((comment,index )=> <Comment key={index} comment={comment}/>)
            }
        </div>
    )
};

export {Comments};


