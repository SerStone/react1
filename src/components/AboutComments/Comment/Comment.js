import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <h3>PostId: {comment.postId} Id: {comment.id} Title: {comment.title}</h3>
            <p>Body: {comment.body}</p>
        </div>
    );
};

export default Comment;