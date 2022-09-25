import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <h3>PostId: {comment.postId} Id: {comment.id} Title:</h3>
            <Link to={`comments/${comment.id}`}><h3>{comment.title}</h3></Link>
            <p>Body: {comment.body}</p>
        </div>
    );
};

export default Comment;