import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className={'Comment'}>
            {comment.id}. {comment.name}<br/>
            {comment.email}<br/>
            {comment.body}
        </div>
    );
};

export {Comment};