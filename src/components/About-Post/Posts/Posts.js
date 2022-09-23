import Post from "../Post/Post";

import {PostForm} from "../Post-Form/Post-Form";

const Posts = ({posts,setPosts,getPostId}) => {

    return (
        <div className={'All-posts'}>

            <div><PostForm setPosts={setPosts}/></div>
        <div className={'Posts'}>
            {

                posts.map(post => <Post key={post.id} post={post} getPostId={getPostId}/>)
            }
        </div>
        </div>
    )
}
export {Posts};
