import Post from "../Post/Post";
import './post-style/post-style.css'

const Posts = ({posts}) =>{
    return(
        <div className={'posts'}>
            {posts.map((post,index)=><Post key={index} post={post}/>)}
        </div>
    );
};
export {Posts}