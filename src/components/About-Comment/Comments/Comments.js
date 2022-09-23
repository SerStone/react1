import React from 'react';
import Comment from "../Comment/Comment";
import {CommentForm} from "../CommentForm/CommentForm";

const Comments = ({comments,setComments}) => {
    return (<div className={'All-comments'}>

            <div><CommentForm setComments={setComments}/></div>
        <div className={'Comments'}>
            {

                comments.map((comment,index )=> <Comment key={index} comment={comment}/>)
            }
        </div>

    </div>
    )
};

export {Comments};


