import React from 'react';

const Post = ({post}) => {
    return (
        <div className={'Post'}>
            {post.id} {post.title}<br/>
            {post.body}
        </div>
    );
};

export {Post};