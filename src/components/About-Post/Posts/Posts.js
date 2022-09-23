import Post from "../Post/Post";

import {PostForm} from "../Post-Form/Post-Form";

const Posts = ({posts,setPosts,getPostId}) => {

    return (
        <div className={'Posts'}>
            <div><PostForm setPosts={setPosts}/></div>
            {

                posts.map(post => <Post key={post.id} post={post} getPostId={getPostId}/>)
            }
        </div>
    )
}
export {Posts};
