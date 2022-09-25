
const Post = ({post}) => {
    return (
        <div className={'Post'}>
            <h3>{post.userId}  {post.id} {post.title}</h3>
            <p>{post.body}</p>

        </div>
    );
};

export {Post}