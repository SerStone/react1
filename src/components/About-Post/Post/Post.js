

const Post = ({post,getPostId}) => {

    return (
        <div className={'Post'}>
            <h2>{post.id}{post.title}</h2>
            <p>{post.body}</p>

            <button onClick={() => getPostId(post.id)}>Posts</button>
        </div>
    )
}
export default Post